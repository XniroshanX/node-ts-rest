import { Request, Response, Router } from 'express';
import UserRouter from './user';
import User from '../../controllers/User';

const router = Router();

router.use('/user', UserRouter);

router.get('/', (req: Request, res: Response) => {

});

export default router;