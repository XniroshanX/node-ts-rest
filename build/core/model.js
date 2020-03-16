"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() { }
    save() {
        console.log('save');
    }
    delete() {
        console.log('delete');
    }
    find(id) {
        console.log('find by id');
        return this;
    }
}
exports.default = Model;
