import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    checkConfig() {
        return ['check config']
    }
}
