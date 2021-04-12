import Express from 'express';
import { PORT } from './assets/constants.js';
import path from 'path';

const app = Express();
const paths = {
  client: path.join(__dirname, '../../client/dist')
}

app.use(
  Express.static(path.join(__dirname, '../../client/dist'))
);
app.set(
  'views',
  paths.client
);
app.engine(
  'html',
  require('ejs').renderFile
);
app.set(
  'view engine',
  'html'
);

// Endpoints
app.get(
  '/',
  (req, res) => res.render('index.html')
)

// Listen
app.listen(
  PORT,
  () => {
    console.log('Server is running on localhost:4000 ...');
  }
);
