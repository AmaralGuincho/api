import { Router } from 'express';

import employeesRouter from './employees';
import usersRouter from './users';
// import authRouter from './auth';

const router = Router();

router.use('/employees', employeesRouter);
router.use('/users', usersRouter);

export default router;
