import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';

const app = express();
app.use(bodyParser.json());

app.config = config;
app.datasource = datasource(app);
app.set('port', config.port);

const Employee = app.datasource.models.employee;

app.route('/employee')
  .get((req, res) => {
    Employee.findAll({})
    .then(result => res.json(result))
    .catch(() => res.status(412));
  })
  .post((req, res) => {
    Employee.create(req.body)
      .then(result => res.json(result))
      .catch(() => res.status(412));
  });

app.route('/employee/:id')
  .get((req, res) => {
    Employee.findOne({ where: req.params })
    .then(result => res.json(result))
    .catch(() => res.status(412));
  })
  .put((req, res) => {
    Employee.update(req.body, { where: req.params })
    .then(result => res.json(result))
    .catch(() => res.status(412));
  })
  .delete((req, res) => {
    Employee.destroy({ where: req.params })
    .then(() => res.sendStatus(204))
    .catch(() => res.status(412));
  });

export default app;
