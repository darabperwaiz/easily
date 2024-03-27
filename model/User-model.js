export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser(name, email, password) {
        const id = Math.floor(Math.random() * Date.now());
        const newUser = new UserModel(id, name, email, password);
        Users.push(newUser);
    }

    static getAllUser() {
        return Users
    }

    static isValidUser(userEmail, userPassword) {
        const getIndex =  Users.findIndex((user)=> user.email == userEmail && user.password == userPassword)
        if(getIndex==-1) {
            return false;
        } else {
            return Users[getIndex];
        }
    }

}


let Users = [];