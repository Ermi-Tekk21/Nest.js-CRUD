// create-episode.dto.ts
import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateEpisodeDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @MinLength(22)
    duration?: string;

    @IsString()
    @IsOptional()
    releaseDate?: string;
}
