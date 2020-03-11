import Controller from '../core/controller';
import { Request, Response } from 'express';
import UserModel from '../models/user';
class User extends Controller {

    getLoggedUser(reqest: Request, response: Response) {
        let user: any = UserModel.find(1);
        user.username = 'niroshanJ';
        user.country = 'Sri Lanka';
        user.save();
        this.json(user, response);
    }

    index(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'Hello there!' });
    }

    profile(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'You are looking at my profile!' });
    }

}

export default User;