import { Controller, Get, Post, Put, Delete, Query, Param, Body, HttpException, HttpStatus, ParseIntPipe, ValidationPipe, DefaultValuePipe, UseGuards } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { ConfigService } from '../config/config.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { IsPositivePipe } from './pipes/is-positive.pipe';
import { ApiGuard } from 'src/api-key/api-key.guard';


@Controller('episodes')
export class EpisodesController {
    constructor(
        private readonly episodesService: EpisodesService,
        private readonly configService: ConfigService, // Access environment variables if needed
    ) { }

    // Check configuration (example method)
    @Get('checkConfig')
    checkConfig() {
        return this.configService.checkConfig();
    }

    // Get all episodes with optional sorting
    @Get()
    getEpisodes(
        @Query('sort') sort: 'asc' | 'desc',
        @Query('limit', new DefaultValuePipe(22), ParseIntPipe, IsPositivePipe) limit: number = 10,

    ) {
        return this.episodesService.getEpisodes(sort, limit);
    }

    // Get a featured episode
    @UseGuards(ApiGuard)
    @Get('featuredEpisode')
    findFeatured() {
        return this.episodesService.findFeatured();
    }

    // Get a specific episode by ID
    @Get('find/:id')
    async getEpisodeById(@Param('id', ParseIntPipe) id: number) {
        const episode = await this.episodesService.getEpisodeById(id);
        if (!episode) {
            // throw new Error('episode not found');
            throw new HttpException('episode not found', HttpStatus.NOT_FOUND);
        }
        console.log("Episode:", episode);

        return episode
    }

    // Create a new episode
    @Post()
    createEpisode(@Body(new ValidationPipe) newEpisode: CreateEpisodeDto) {
        return this.episodesService.createEpisode(newEpisode);
    }

    // Update a specific episode by ID
    @Put(':id')
    updateEpisodeById(@Param('id') id: string, @Body() updatedEpisode: UpdateEpisodeDto) {
        return this.episodesService.updateEpisodeById(id, updatedEpisode);
    }

    // Delete a specific episode by ID
    @Delete(':id')
    deleteEpisodeById(@Param('id') id: string) {
        return this.episodesService.deleteEpisodeById(id);
    }

    // Delete all episodes
    @Delete()
    deleteEpisodes() {
        return this.episodesService.deleteEpisodes();
    }
}
