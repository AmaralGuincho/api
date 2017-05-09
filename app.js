import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';
import { sequelize } from './models';

const app = express();

const configureExpress = function () {
  app.use(bodyParser.json());
  app.use('/', routes);

  return app;
};

export default () => sequelize.sync().then(configureExpress);
