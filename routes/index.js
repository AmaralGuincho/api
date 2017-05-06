import express from 'express';

import employeesRouter from './employees';
import usersRouter from './users';
import authRouter from './auth';

const router = express.Router();

router.get('/employees', employeesRouter);
router.get('/users', usersRouter);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
