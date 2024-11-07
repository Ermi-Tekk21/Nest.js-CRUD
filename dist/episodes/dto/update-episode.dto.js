"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEpisodeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_episode_dto_1 = require("./create-episode.dto");
class UpdateEpisodeDto extends (0, mapped_types_1.PartialType)(create_episode_dto_1.CreateEpisodeDto) {
}
exports.UpdateEpisodeDto = UpdateEpisodeDto;
//# sourceMappingURL=update-episode.dto.js.map