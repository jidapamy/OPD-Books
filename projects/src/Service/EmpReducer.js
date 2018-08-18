import { Employee } from "./../Model/Employee";

const UserLogin = {
    accountLogin: Employee,
    sessionKey: ''
}

export const login = (emp) => {
    UserLogin.accountLogin = emp;
}

export const logout = () => {
    UserLogin.accountLogin = Employee;
}

export const getAccountLogin = () => {
    return UserLogin.accountLogin
}