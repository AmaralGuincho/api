import express from 'express';
import EmployeesController from '../controllers/employees';
import { models } from '../models';

const route = express.Router();
const Employee = models.employee;

const employeesController = new EmployeesController(Employee);
route.get('/', (req, res) => employeesController.getAll(req, res));
route.get('/:id', (req, res) => employeesController.getById(req, res));
route.post('/', (req, res) => employeesController.create(req, res));
route.put('/:id', (req, res) => employeesController.update(req, res));
route.delete('/:id', (req, res) => employeesController.delete(req, res));

export default route;
