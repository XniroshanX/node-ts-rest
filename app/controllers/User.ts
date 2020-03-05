import Controller from '../core/controller';
import { Request, Response } from 'express';
import UserService from '../services/user';

class User extends Controller {
    products(req: Request, response: Response) {
        let users:any = UserService.allUsers();
        this.render('products.html', response, {users: users});
    }
}

export default User;