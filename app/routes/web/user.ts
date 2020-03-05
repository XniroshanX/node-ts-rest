import { Request, Response, Router } from 'express';
import User from '../../controllers/User';

const router = Router();

router.get('/products',(req: Request, res: Response) => {
    console.log('test products');
});

export default router;