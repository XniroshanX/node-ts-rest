import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router = Router();

const user = new User();

router.get('/list',(request: Request, response: Response) => {
    user.userList(request, response);
});

export default router;