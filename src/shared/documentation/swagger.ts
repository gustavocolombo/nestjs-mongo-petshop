import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { constants } from './constants';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setDescription(constants.SWAGGER_DESCRIPTION)
    .setTitle(constants.SWAGGER_TITLE)
    .setVersion(constants.SWAGGER_VERSION)
    .setContact(
      constants.SWAGGER_CONTACT.CONTACT_NAME,
      constants.SWAGGER_CONTACT.CONTACT_URL,
      null,
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
