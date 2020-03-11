import { Response } from 'express';

class Model {

    constructor() { }

    save() {
        console.log('save');
    }
    
    delete() {
        console.log('delete');
    }

    find(id:any) {
        console.log('find by id');
        return this;
    }

}

export default Model;