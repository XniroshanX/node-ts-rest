"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const User_1 = __importDefault(require("../../controllers/User"));
const router = express_1.Router();
router.use('/user', user_1.default);
const user = new User_1.default();
router.get('/', (request, response) => {
    user.index(request, response);
});
exports.default = router;
