import { Employee } from "./../Model/Employee";

const UserLogin = {
    accountLogin: Employee,
}

export const login = (emp) => {
    UserLogin.accountLogin = emp;
    console.log(UserLogin.accountLogin);
}

export const logout = () => {
    UserLogin.accountLogin = {};
    console.log("logout",UserLogin.accountLogin);
}

export const getAccountLogin = () => {
    return UserLogin.accountLogin
}