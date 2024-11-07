import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key']; // Get the API key from headers

    if (apiKey && apiKey === 'nest is awsome') {
      return true; // Allow access if API key matches
    } else {
      throw new UnauthorizedException('Invalid API Key');
    }
  }
}
