import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5001,()=> console.log('Listening on port http://localhost:5001'));
}
bootstrap();
