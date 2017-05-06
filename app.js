import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';
import { sequelize } from './models';

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log('Connected to the database!');
    app.use('/', routes);
    app.use(bodyParser.json());
    app.listen(config.port, () => console.log(`Listening on ${config.port}`));
  });

export default app;
