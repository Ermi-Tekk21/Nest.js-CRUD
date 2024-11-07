import { EpisodesService } from './episodes.service';
import { ConfigService } from '../config/config.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
export declare class EpisodesController {
    private readonly episodesService;
    private readonly configService;
    constructor(episodesService: EpisodesService, configService: ConfigService);
    checkConfig(): string[];
    getEpisodes(sort: 'asc' | 'desc'): string[];
    findFeatured(): string;
    getEpisodeById(id: string): string;
    createEpisode(newEpisode: CreateEpisodeDto): string;
    updateEpisodeById(id: string, updatedEpisode: UpdateEpisodeDto): string;
    deleteEpisodeById(id: string): string;
    deleteEpisodes(): string;
}
