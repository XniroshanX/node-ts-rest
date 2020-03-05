import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let user = new User();
    user.products(req, res);
});

export default router;