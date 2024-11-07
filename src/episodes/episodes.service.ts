import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';


@Injectable()
export class EpisodesService {
    // Get all episodes with optional sorting
    getEpisodes(sort: 'asc' | 'desc', limit: number) {
        console.log("Sort order is:", sort);
        console.log("Limit is:", limit);
        return ['all episodes'];
    }

    // Get a featured episode
    findFeatured() {
        return 'Featured episodes';
    }
    // Get a specific episode by ID
    getEpisodeById(id: number) {
        console.log("Episode ID:", id);
        return `EpisodeCheck ${id}`;
    }

    // Create a new episode
    createEpisode(newEpisode: CreateEpisodeDto) {
        console.log("Creating episode:", newEpisode);
        return 'Episode created';
    }

    // Update a specific episode by ID
    updateEpisodeById(id: string, updatedEpisode: UpdateEpisodeDto) {
        console.log("Updating episode ID:", id, "with data:", updatedEpisode);
        return `Episode ${id} updated`;
    }

    // Delete a specific episode by ID
    deleteEpisodeById(id: string) {
        console.log("Deleting episode ID:", id);
        return `Episode ${id} deleted`;
    }

    // Delete all episodes
    deleteEpisodes() {
        console.log("Deleting all episodes");
        return 'All episodes deleted';
    }
}
