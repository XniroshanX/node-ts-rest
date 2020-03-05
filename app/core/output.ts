import { Response } from 'express';
import path from 'path';

class Output {

    viewDirectory: string = "";

    constructor() {
        this.init();
    }

    private init() {
        this.viewDirectory = '/app/views';
    }

    render(file: string, response: Response, data: any) {
        data.root = this.viewDirectory;
        return response.render(file, data);
    }

    json(response: Response, data: any) {
        response.contentType('json').send(data);
    }
}
let OutputService = new Output();
export default OutputService;