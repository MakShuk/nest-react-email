import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2998);
  console.log('🚀 react-mail is running on port 2998');
}
bootstrap();
