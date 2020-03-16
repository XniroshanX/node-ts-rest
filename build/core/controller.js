"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = __importDefault(require("./output"));
class Controller {
    render(viewFile, response, data) {
        output_1.default.render(viewFile, response, data);
    }
    json(data, response) {
        output_1.default.json(response, data);
    }
    success(response) {
        output_1.default.json(response, { 'success': true });
    }
    fail(message, response, code = 500) {
        output_1.default.json(response, { 'success': false, 'message': message }, code);
    }
}
exports.default = Controller;
