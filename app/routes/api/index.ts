import { Request, Response, Router } from 'express';
import UserRouter from './user';
import Output from '../../core/output';

const router = Router();

router.use('/user', UserRouter);

router.get('/', (request: Request, response: Response) => {
    return Output.json(response, { message: "Welcome to API!" });
});

export default router;
