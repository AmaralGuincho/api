import { Router } from 'express';
import UsersController from '../controllers/users';
import { Models } from '../models';

const route = Router();
const Users = Models.user;
const usersController = new UsersController(Users);

route.get('/', (req, res) => usersController.getAll(req, res));
route.get('/:employee', (req, res) => usersController.getById(req, res));
route.post('/', (req, res) => usersController.create(req, res));
route.put('/:employee', (req, res) => usersController.update(req, res));
route.delete('/:employee', (req, res) => usersController.delete(req, res));

export default route;
