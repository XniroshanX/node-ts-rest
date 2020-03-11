import Model from '../core/model';

class User extends Model {

    find(id:number) {
        console.log('find by ' + id);
        return this
    }
}

let UserModel = new User();
export default UserModel;