import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from '../config';

let database = null;

const sequelize = new Sequelize(config.databaseUrl(), config.params);

const models = [];

fs
  .readdirSync(__dirname)
  .filter(file => (file !== 'index.js'))
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    const model = sequelize.import(modelPath);
    models[model.name] = model;
  });

database = {
  sequelize,
  Sequelize,
  models,
};

export default database;
