import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
export declare class EpisodesService {
    getEpisodes(sort: 'asc' | 'desc'): string[];
    findFeatured(): string;
    getEpisodeById(id: string): string;
    createEpisode(newEpisode: CreateEpisodeDto): string;
    updateEpisodeById(id: string, updatedEpisode: UpdateEpisodeDto): string;
    deleteEpisodeById(id: string): string;
    deleteEpisodes(): string;
}
