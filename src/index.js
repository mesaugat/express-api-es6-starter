import './env';
import './db';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import Raven from 'raven';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import routes from './routes';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compression from 'compression';
import json from './middlewares/json';
import logger, { logStream } from './utils/logger';
import * as errorHandler from './middlewares/errorHandler';

// Initialize Raven
// https://docs.sentry.io/clients/node/integrations/express/
Raven.config(process.env.SENTRY_DSN).install();

const app = express();

const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

// This request handler must be the first middleware on the app
app.use(Raven.requestHandler());

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('tiny', { stream: logStream }));
app.use(bodyParser.json());
app.use(errorHandler.bodyParser);
app.use(json);

// API Routes
app.use('/api', routes);

// Swagger UI
// Hack around changing URL for swagger.json
// https://github.com/swagger-api/swagger-ui/issues/4624
const swaggerIndexContent = fs
  .readFileSync(`${pathToSwaggerUi}/index.html`)
  .toString()
  .replace('https://petstore.swagger.io/v2/swagger.json', '/api/swagger.json');

app.get('/api-docs/index.html', (req, res) => res.send(swaggerIndexContent));
app.get('/api-docs', (req, res) => res.redirect('/api-docs/index.html'));
app.use('/api-docs', express.static(pathToSwaggerUi));

// This error handler must be before any other error middleware
app.use(Raven.errorHandler());

// Error Middlewares
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});

export default app;
