import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins
  app.enableCors({
    origin: '*', // Allows requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // HTTP methods allowed
    allowedHeaders: 'Content-Type, Accept, Authorization', // Allowed headers
  });

  await app.listen(3000);
}
bootstrap();
