import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router = Router();

const user = new User();

router.get('/profile',(request: Request, response: Response) => {
    user.profile(request, response);
});

export default router;