import { Request, Response, Router } from 'express';
import UserRouter from './user';
import User from '../../controllers/User';

const router: Router = Router();

router.use('/user', UserRouter);

const user: User = new User();

router.get('/', (request: Request, response: Response) => {
    user.index(request, response);
});

export default router;