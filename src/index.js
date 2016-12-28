import './env';
import './db';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import routes from './routes';
import logger from './utils/logger';
import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();

// Test environment will run in port 9949
const APP_PORT = (process.env.NODE_ENV !== 'test' ? process.env.APP_PORT : '9949') || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(helmet());
app.use(compression());   // This is an expensive operation, if you are using revery proxy server of some kind gzip from there.
app.use(morgan('dev'));
app.use(bodyParser.json());

// API Routes
app.use('/api', routes);

app.listen(app.get('port'), app.get('host'), () => {
  logger.log('info', 'Server started at http://localhost:' + app.get('port'));
});

export default app;
