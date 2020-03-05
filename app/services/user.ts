import UserRepository from '../repositories/user';

class User {

    allUsers() {
        return UserRepository.getAllUser();
    }

}

let UserService = new User();
export default UserService;