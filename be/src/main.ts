import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initialize as initializeDb } from './db';

const bootstrap = async () => {
  await initializeDb();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
