import Controller from '../core/controller';
import { Request, Response } from 'express';
import UserModel, { UserModelInterface } from '../models/user';

class User extends Controller {

    create(reqest: Request, response: Response) {
        // create user by using mongoose model
        UserModel.create({
            username: reqest.body.username,
            email: reqest.body.email
        }).then((data: UserModelInterface) => {
            this.success(response);
        }).catch((error: Error) => {
            this.fail(error.message, response, 500);
        });
    }

    index(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'Hello there!' });
    }

    profile(reqest: Request, response: Response) {
        this.render('index', response, { title: 'Welcome', message: 'Welcome to my profile!' });
    }

}

export default User;