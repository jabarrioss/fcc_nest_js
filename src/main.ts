import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  await app.listen(3000);
  await app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))
  console.log("App is running on port 3000");
}
bootstrap();
