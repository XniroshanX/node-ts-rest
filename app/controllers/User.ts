import Controller from '../core/controller';
import { Request, Response } from 'express';
import UserService from '../services/user';

class User extends Controller {

    getUsers(reqest: Request, response: Response) {
        let users: any = UserService.allUsers();
        this.json(users, response);
    }

    userList(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Hey', message: 'Hello there! This was created by PUG...' });
    }

}

export default User;