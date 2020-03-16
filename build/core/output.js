"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    constructor() {
        this.viewDirectory = "";
        this.init();
    }
    init() {
        this.viewDirectory = '/app/views';
    }
    render(file, response, data) {
        data.root = this.viewDirectory;
        return response.render(file, data);
    }
    json(response, data, code = 200) {
        response.status(code).contentType('json').send(data);
    }
}
let OutputService = new Output();
exports.default = OutputService;
