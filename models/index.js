import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from '../config';

export const sequelize = new Sequelize(config.databaseUrl(), config.params);

const database = [];

fs
  .readdirSync(__dirname)
  .filter(file => (file !== 'index.js'))
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    const model = sequelize.import(modelPath);
    database[model.name] = model;
  });

export const Models = database;

const everything = {
  sequelize,
  Sequelize,
  database,
};

export default everything;
