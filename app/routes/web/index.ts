import { Request, Response, Router } from 'express';
import UserRouter from './user';
import User from '../../controllers/User';

const router = Router();

router.use('/user', UserRouter);

const user = new User();

router.get('/', (request: Request, response: Response) => {
    user.index(request, response);
});

export default router;