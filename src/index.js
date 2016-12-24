import express from 'express';

const app = express();

app.set('port', 8848);
app.set('host', '127.0.0.1');

app.get('/', (req, res) => {
  res.json({'title': 'express-api-es6-starter'});
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});

export default app;
