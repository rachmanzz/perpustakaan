import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Perpustakaan API')
      .setDescription("API documentation")
      .setVersion('1.0')
      .addTag('library, book')
      .addBearerAuth({ 
        type: 'http',
        name: 'Authorization',
        scheme: 'Bearer',
        bearerFormat: 'Bearer',
        in: 'Header'
      }, 'access-token')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger/api', app, document);
  }

  app.enableVersioning({
    defaultVersion: 'v1',
    type: VersioningType.URI,
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
