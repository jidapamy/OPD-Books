import { defaultAccount, contract, web3 } from "./../Lib/Web3";

export const getEmployee = (empId) => {
  let userLogin = {};
  const empLogin = contract.getInfoEmployee(web3.fromAscii(empId));
  userLogin.empId = web3.toAscii(empLogin[0]);
  userLogin.nameTitle = web3.toAscii(empLogin[1]);
  userLogin.firstname = web3.toAscii(empLogin[2]);
  userLogin.lastname = web3.toAscii(empLogin[3]);
  userLogin.position = +empLogin[5].toString();
  userLogin.clinic = web3.toAscii(empLogin[6]);
  return userLogin; 
};
