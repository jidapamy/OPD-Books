import { defaultAccount, contract, web3 } from "./../Lib/Web3";

export const login = (userId, password, role) => {
  let userLogin = {};
  if(role === "Emp"){
    const res = contract.LoginEmployee(web3.fromAscii(userId), web3.fromAscii(password));
    if (res) {
      const empLogin = contract.getInfoEmployee(web3.fromAscii(userId));
      if (empLogin) {
        userLogin.empId = web3.toAscii(empLogin[0]);
        userLogin.nameTitle = web3.toAscii(empLogin[1]);
        userLogin.firstname = web3.toAscii(empLogin[2]);
        userLogin.lastname = web3.toAscii(empLogin[3]);
        userLogin.position = +empLogin[5].toString();
        userLogin.clinic = web3.toAscii(empLogin[6]);
      }
      return userLogin;
    } 
    return false;
  }else{
      //Patient
      const res = contract.Login(web3.fromAscii(userId), web3.fromAscii(password));
      if (res) {
        return web3.fromAscii(userId);
      }
      return false;
  }
};
