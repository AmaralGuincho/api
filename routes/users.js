import express from 'express';
import UsersController from '../controllers/users';
import Users from '../models/user';

const route = express.Router();
const usersController = new UsersController(Users);

route.get('/', (req, res) => usersController.getAll(req, res));
route.get('/:employee', (req, res) => usersController.getById(req, res));
route.post('/', (req, res) => usersController.create(req, res));
route.put('/:employee', (req, res) => usersController.update(req, res));
route.delete('/:employee', (req, res) => usersController.delete(req, res));

export default route;
