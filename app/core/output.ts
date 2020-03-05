import { Response } from 'express';
import path from 'path';

class Output {

    viewDirectory: string = "";

    constructor() {
        this.init();
    }

    private init() {
        this.viewDirectory = path.join('app', 'views');
    }

    render(file: string, response: Response, data: any) {
        data.root = this.viewDirectory;
        return response.sendFile(file, data);
    }

    json(response: Response, data: any) {
        response.contentType('json').send(data);
    }
}
let OutputService = new Output();
export default OutputService;