import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION
  },
  host: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
  basePath: '/api'
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [path.join(__dirname, '/../routes.js'), path.join(__dirname, '/../controllers/*.js')]
};

/**
 * Initialize swagger-jsdoc.
 */
let swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
