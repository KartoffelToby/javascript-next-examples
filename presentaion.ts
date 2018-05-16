// Some Config Shit
({
    babel: true
})


// PLAYGROUND


import axios, { AxiosResponse } from 'axios';

// Types:
const nummer:Number = 5;

const object:Object = {'some':'data'};

const word:String = "Hallo welt";

const array:Array<String> = ['one','two'];

const array2:Array<Number> = [1,2];

const array3:Array<any> = [1,2,"demo"];







































class User {
    private _id: Number;
    private _name: String;
    private _username: String;
    private _email: String;


    constructor(id: Number, name: String, username: String, email: String) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
    }


    get id(): Number {
        return this._id;
    }

    set id(value: Number) {
        this._id = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get username(): String {
        return this._username;
    }

    set username(value: String) {
        this._username = value;
    }

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }
}

export default User;




























const main = async ()=> {
    let users: Array<User> = await getUsers();
    console.log('Users', users);
    console.log(`EMAIL: ${users[0].email}, USER: ${users[0].username}`)
}

const getUsers = async (): Promise<Array<User>> =>{
    let response: AxiosResponse = axios.get('https://jsonplaceholder.typicode.com/users');
    let users: Array<User> = [];
    response.data.forEach((user: User) => users.push(new User(user.id, user.name, user.username, user.email)));
    return users;
}

//main();

//