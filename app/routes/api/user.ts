import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router = Router();

const user = new User();

router.get('/', (req: Request, res: Response) => {
    user.getUsers(req, res);
});

export default router;