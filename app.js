import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import employeesRouter from './routes/employees';

const app = express();
app.use(bodyParser.json());

app.config = config;
app.datasource = datasource(app);
app.set('port', config.port);

const Employee = app.datasource.models.employee;
employeesRouter(app, Employee);


export default app;
