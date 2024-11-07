"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesService = void 0;
const common_1 = require("@nestjs/common");
let EpisodesService = class EpisodesService {
    getEpisodes(sort) {
        console.log("Sort order is:", sort);
        return ['all episodes'];
    }
    findFeatured() {
        return 'Featured episodes';
    }
    getEpisodeById(id) {
        console.log("Episode ID:", id);
        return `Episode ${id}`;
    }
    createEpisode(newEpisode) {
        console.log("Creating episode:", newEpisode);
        return 'Episode created';
    }
    updateEpisodeById(id, updatedEpisode) {
        console.log("Updating episode ID:", id, "with data:", updatedEpisode);
        return `Episode ${id} updated`;
    }
    deleteEpisodeById(id) {
        console.log("Deleting episode ID:", id);
        return `Episode ${id} deleted`;
    }
    deleteEpisodes() {
        console.log("Deleting all episodes");
        return 'All episodes deleted';
    }
};
exports.EpisodesService = EpisodesService;
exports.EpisodesService = EpisodesService = __decorate([
    (0, common_1.Injectable)()
], EpisodesService);
//# sourceMappingURL=episodes.service.js.map