import UserModel from '../models/user';

class User {

    getAllUser() {
        UserModel.all();
    }

}
let UserRepository = new User();
export default UserRepository;