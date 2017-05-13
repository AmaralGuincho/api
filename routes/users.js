import { Router } from 'express';
import Crud from '../controllers/crud';
import { Models } from '../models';

const route = Router();
const Users = Models.user;
const usersController = new Crud(Users);

route.get('/', (req, res) => usersController.get(req, res));
route.get('/:employee', (req, res) => usersController.get(req, res));
route.post('/', (req, res) => usersController.create(req, res));
route.put('/:employee', (req, res) => usersController.update(req, res));
route.delete('/:employee', (req, res) => usersController.delete(req, res));

export default route;
