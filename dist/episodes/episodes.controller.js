"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesController = void 0;
const common_1 = require("@nestjs/common");
const episodes_service_1 = require("./episodes.service");
const config_service_1 = require("../config/config.service");
const create_episode_dto_1 = require("./dto/create-episode.dto");
const update_episode_dto_1 = require("./dto/update-episode.dto");
let EpisodesController = class EpisodesController {
    constructor(episodesService, configService) {
        this.episodesService = episodesService;
        this.configService = configService;
    }
    checkConfig() {
        return this.configService.checkConfig();
    }
    getEpisodes(sort) {
        return this.episodesService.getEpisodes(sort);
    }
    findFeatured() {
        return this.episodesService.findFeatured();
    }
    getEpisodeById(id) {
        return this.episodesService.getEpisodeById(id);
    }
    createEpisode(newEpisode) {
        return this.episodesService.createEpisode(newEpisode);
    }
    updateEpisodeById(id, updatedEpisode) {
        return this.episodesService.updateEpisodeById(id, updatedEpisode);
    }
    deleteEpisodeById(id) {
        return this.episodesService.deleteEpisodeById(id);
    }
    deleteEpisodes() {
        return this.episodesService.deleteEpisodes();
    }
};
exports.EpisodesController = EpisodesController;
__decorate([
    (0, common_1.Get)('checkConfig'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "checkConfig", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "getEpisodes", null);
__decorate([
    (0, common_1.Get)('featuredEpisode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "findFeatured", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "getEpisodeById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_episode_dto_1.CreateEpisodeDto]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "createEpisode", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_episode_dto_1.UpdateEpisodeDto]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "updateEpisodeById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "deleteEpisodeById", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "deleteEpisodes", null);
exports.EpisodesController = EpisodesController = __decorate([
    (0, common_1.Controller)('episodes'),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService,
        config_service_1.ConfigService])
], EpisodesController);
//# sourceMappingURL=episodes.controller.js.map