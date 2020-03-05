import Model from '../core/model';

class User extends Model {

    all() {
        return [
            { username: 'niroshan', age: 29 },
            { username: 'johndoe', age: 29 },
        ]
    }
}

let UserModel = new User();
export default UserModel;