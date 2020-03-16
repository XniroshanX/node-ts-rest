"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../core/controller"));
const user_1 = __importDefault(require("../models/user"));
class User extends controller_1.default {
    create(reqest, response) {
        // create user by using mongoose model
        user_1.default.create({
            username: reqest.body.username,
            email: reqest.body.email
        }).then((data) => {
            this.success(response);
        }).catch((error) => {
            this.fail(error.message, response, 500);
        });
    }
    index(reqest, response) {
        this.render('index', response, { title: 'Welcome', message: 'Hello there!' });
    }
    profile(reqest, response) {
        this.render('index', response, { title: 'Welcome', message: 'Welcome to my profile!' });
    }
}
exports.default = User;
