import UserModel from '../models/user';

class User {

    getAllUser() {
        return UserModel.all();
    }

}
let UserRepository = new User();
export default UserRepository;