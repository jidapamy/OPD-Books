const WEB3 = require("../Server/Web3");
const web3 = WEB3.web3;
const contract = WEB3.contract;
const defaultAccount = WEB3.defaultAccount;

const login = async(citizenId, password) => {
  let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(citizenId));  // เชคว่ามีคนนี้อยู่ไหม
  if(checkCitizenId){
    const res = await contract.Login(web3.fromAscii(citizenId), web3.fromAscii(password));
    if (res) { return { status : true , message : "SUCCESS" } }
    return { status: false , message : "ERROR : Incorrect citizen ID or password" };
  }
  return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please register before accessing." };
};

module.exports = {
  login: login
};