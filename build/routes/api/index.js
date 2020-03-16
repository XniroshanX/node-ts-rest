"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const output_1 = __importDefault(require("../../core/output"));
const router = express_1.Router();
// use user routes
router.use('/user', user_1.default);
router.get('/', (request, response) => {
    return output_1.default.json(response, { message: "Welcome to API!" });
});
exports.default = router;
