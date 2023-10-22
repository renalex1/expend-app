import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';
import * as https from 'https';

async function bootstrap() {
  ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` });

  const PORT = process.env.PORT || 4000;
  const HOST = process.env.HOST || 'localhost';

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  let protocol = 'http';

  if (process.env.NODE_ENV === 'prod') {
    const httpsOptions = {
      key: fs.readFileSync('path_to_your_private_key.pem'),
      cert: fs.readFileSync('path_to_your_certificate.pem'),
    };

    const server = https.createServer(httpsOptions, app.getHttpAdapter().getInstance());

    await app.init();
    server.listen(PORT);

    protocol = 'https';
  } else {
    await app.listen(PORT);
  }

  console.log(`
  🚀  GraphQL API server, launched at ${protocol}://${HOST}:${PORT}/graphql`);
}
bootstrap();
