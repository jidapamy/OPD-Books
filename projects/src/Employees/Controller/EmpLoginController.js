import { defaultAccount, contract, web3 } from "./../../Lib/Web3";

export const login = (empId, password) => {
  console.log("login", empId, password);
  let userLogin = {};
  const res = contract.LoginEmployee( web3.fromAscii(empId), web3.fromAscii(password));

  if (res) {
    const empLogin = contract.getInfoEmployee(web3.fromAscii(empId));
    if (empLogin) {
      userLogin.empId = web3.toAscii(empLogin[0]);
      userLogin.nameTitle = web3.toAscii(empLogin[1]);
      userLogin.firstname = web3.toAscii(empLogin[2]);
      userLogin.lastname = web3.toAscii(empLogin[3]);
      userLogin.position = +empLogin[5].toString();
      userLogin.clinic = web3.toAscii(empLogin[6]);
    }
    return userLogin;
  } else {
      return false
  }
};
