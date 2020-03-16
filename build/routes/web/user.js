"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../../controllers/User"));
const router = express_1.Router();
const user = new User_1.default();
router.get('/profile', (request, response) => {
    user.profile(request, response);
});
exports.default = router;
