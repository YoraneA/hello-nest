import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove properties unwanted
      forbidNonWhitelisted: true, // If set to true, instead of stripping non-whitelisted properties validator will throw an erro
      transform: true, // Convert automaticaly the given data type in the expected one
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => console.error(err));
