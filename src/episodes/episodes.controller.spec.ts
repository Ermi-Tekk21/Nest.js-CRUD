// Import required testing utilities from the NestJS testing module
import { Test, TestingModule } from '@nestjs/testing';

// Import the EpisodesController, which will be tested
import { EpisodesController } from './episodes.controller';

// Import the EpisodesService, which the controller depends on
import { EpisodesService } from './episodes.service';

// Import the ConfigModule, which may be required for configuration dependencies
import { ConfigModule } from '../config/config.module';

// Start the test suite for EpisodesController
describe('EpisodesController', () => {
  // Declare the controller variable, which will be initialized in the beforeEach block
  let controller: EpisodesController;

  // Create a Jest mock function to mock the behavior of the `getEpisodeById` method
  const mockGetEpisodeById = jest.fn();
  const mockFindFeatured = jest.fn();
  // Create a mock version of the EpisodesService with predefined behaviors
  const mockEpisodeService = {
    checkConfig: async () => 'Mocked Config',         // Mock implementation for checkConfig
    getEpisodes: async () => 'Mocked episodes',       // Mock implementation for getEpisodes
    findFeatured: mockFindFeatured,      // Mock implementation for findFeatured
    getEpisodeById: mockGetEpisodeById,               // Use the mock function for getEpisodeById
    createEpisode: async () => 'Mocked created episode', // Mock implementation for createEpisode
  };
  describe('when episodes is found', () => {
    // Runs before each test to reset the test module and any mocks
    beforeEach(async () => {
      jest.resetAllMocks(); // Reset any previous mock calls and return values

      // Create a testing module that mimics the actual application module
      const module: TestingModule = await Test.createTestingModule({
        controllers: [EpisodesController],                 // Include the EpisodesController in the test module
        providers: [{ provide: EpisodesService, useValue: mockEpisodeService }], // Provide a mocked EpisodesService
        imports: [ConfigModule], // Import ConfigModule for any configuration dependencies
      }).compile();

      // Initialize the controller using the testing module
      controller = module.get<EpisodesController>(EpisodesController);
    });

    // Test to check if the controller is defined (i.e., successfully instantiated)
    it('should be defined', () => {
      expect(controller).toBeDefined(); // The controller should not be undefined
    });

    // Test suite for the getEpisodeById method
    describe('getEpisodeById', () => {
      const episodeId = 22; // Define a sample episode ID to test with
      const mockResult = { id: episodeId, name: 'Episode 1', description: 'Description 1' }; // Define a mock result object

      // Set up the mock return value for getEpisodeById before each test in this suite
      beforeEach(() => {
        mockGetEpisodeById.mockResolvedValue(mockResult); // Configure mockGetEpisodeById to resolve to mockResult
      });

      // Test to verify if getEpisodeById returns the correct mock result
      it('should return correct response', async () => {
        const result = await controller.getEpisodeById(episodeId); // Call getEpisodeById on the controller
        expect(result).toEqual(mockResult); // Expect the returned result to match the entire mockResult object
      });
    });

    // Test suite for the findFeatured method
    describe('findFeatured', () => {
      const mockResult = "featureded mock"

      beforeEach(() => {
        mockFindFeatured.mockReturnValue(mockResult) 
      })
      // Test to verify if findFeatured returns the correct mock result
      it('should return correct response', async () => {
        const result = await controller.findFeatured(); // Call findFeatured on the controller
        expect(result).toBe(mockResult); // Expect the result to match the mock string "Mocked featured"
      });
    });
  })

  describe('when episode is not found', () => {
    const episodeId = 13

    beforeEach(()=> {
      mockGetEpisodeById.mockResolvedValue(null)
    })

    it('should through an error', async()=>{
      await expect(controller.getEpisodeById(episodeId)).rejects.toThrow('episode not found')
    })
  })

});
