import { Router } from 'express';
import EmployeesController from '../controllers/employees';
import { Models } from '../models';

const route = Router();
const Employee = Models.employee;

const employeesController = new EmployeesController(Employee);

route.get('/', (req, res) => employeesController.getAll(req, res));
route.get('/:id', (req, res) => employeesController.getById(req, res));
route.post('/', (req, res) => employeesController.create(req, res));
route.put('/:id', (req, res) => employeesController.update(req, res));
route.delete('/:id', (req, res) => employeesController.delete(req, res));

route.get('/', (req, res) => res.send('Employee'));
route.post('/', (req, res) => res.send(req.body));

export default route;
