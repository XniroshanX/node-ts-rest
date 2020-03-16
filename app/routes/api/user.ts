import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router: Router = Router();

const user: User = new User();

router.post('/', (req: Request, res: Response) => {
    user.create(req, res);
});

export default router;