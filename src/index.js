import '../env';
import './db';
import express from 'express';
import routes from './routes';

const app = express();

// Test environment will run in port 9949
const APP_PORT = (process.env.NODE_ENV !== 'test' ? process.env.APP_PORT : '9949') || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

// API Routes
app.use('/api', routes);

app.listen(app.get('port'), app.get('host'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});

export default app;
