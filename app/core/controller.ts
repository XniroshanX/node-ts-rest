import { Response } from 'express';
import Output from './output';

class Controller {

    render(viewFile: string, response: Response, data: any) {
        Output.render(viewFile, response, data);
    }

    json(data: any, response: Response) {
        Output.json(response, data);
    }

    success(response: Response) {
        Output.json(response, { 'success': true });
    }
    fail(message: string, response: Response, code: number = 500) {
        Output.json(response, { 'success': false, 'message': message }, code);
    }
}

export default Controller;