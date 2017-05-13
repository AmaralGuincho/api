import { Router } from 'express';
import Crud from '../controllers/crud';
import { Models } from '../models';

const route = Router();
const Employee = Models.employee;
const employeesController = new Crud(Employee);

route.get('/', (req, res) => employeesController.get(req, res));
route.get('/:id', (req, res) => employeesController.get(req, res));
route.post('/', (req, res) => employeesController.create(req, res));
route.put('/:id', (req, res) => employeesController.update(req, res));
route.delete('/:id', (req, res) => employeesController.delete(req, res));

export default route;
