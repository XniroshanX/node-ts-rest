import Controller from '../core/controller';
import { Request, Response } from 'express';
import UserService from '../services/user';

class User extends Controller {

    getUsers(reqest: Request, response: Response) {
        let users: any = UserService.allUsers();
        this.json(users, response);
    }

    index(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'Hello there!' });
    }

    profile(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'You are looking at my profile!' });
    }

}

export default User;