import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenue dans mon premier projet NestJS !';
  }

  getHelloName(name: string) {
    return `Hello ${name}!`;
  }
}
