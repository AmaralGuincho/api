import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';
import { sequelize } from './models';

const app = express();

const configureExpress = function () {
  app.use('/', routes);
  app.use(bodyParser.json());

  return app;
};

export default () => sequelize.sync().then(configureExpress);
