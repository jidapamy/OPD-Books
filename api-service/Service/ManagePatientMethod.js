const WEB3 = require("../Server/Web3");
var moment = require("moment");
const web3 = WEB3.web3;
const contract = WEB3.contract;
const defaultAccount = WEB3.defaultAccount;

const insertPatient = async(patient) => {
  let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(patient.citizenId));  // เชคว่ามีคนนี้อยู่ไหม
  if(!checkCitizenId){
    let checkEmail = await contract.haveEmail(web3.fromAscii(patient.email))
    if(!checkEmail){
      // const hn = contract.getLengthPatientAccounts()+1 + "/" + ((+moment().format("YYYY")+543)+"").substring(2)  ;
      const hn = contract.getLengthPatientAccounts() + 1 + "/" + (+moment().format("YYYY") + 543 + "").substring(2);
      contract.setInfoPatientPart1(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.date), web3.fromAscii(hn), web3.fromAscii(patient.password), defaultAccount);    
      contract.setInfoPatientPart2(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.dob), web3.fromAscii(patient.nameTitle), web3.fromAscii(patient.firstname), web3.fromAscii(patient.lastname), web3.fromAscii(patient.gender), defaultAccount);
      contract.setInfoPatientPart3(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.congenitalDisease), web3.fromAscii(patient.bloodgroup), web3.fromAscii(patient.religion), web3.fromAscii(patient.nationality), web3.fromAscii(patient.country), defaultAccount);
      contract.setInfoPatientPart4(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.status), web3.fromAscii(patient.occupartion === "" ? "-" : patient.occupartion), web3.fromAscii(patient.homePhonenumber === "" ? "-" : patient.homePhonenumber), web3.fromAscii(patient.mobileNumber), web3.fromAscii(patient.email), defaultAccount);
      contract.setEmail(web3.fromAscii(patient.email), defaultAccount);

      contract.setAddressPatient(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.typeofHouse), patient.address, web3.fromAscii(patient.province), web3.fromAscii(patient.district), web3.fromAscii(patient.subDistrict), web3.fromAscii(patient.zipcode), defaultAccount);
      contract.setPatientAllergy(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.allergy), web3.fromAscii(patient.privilege), defaultAccount);
      
      if (patient.emerTitle != '' || patient.emerFirstname != '' || patient.emerLastname != '') {
        contract.setEmergencyContactPart1(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.emerTitle), web3.fromAscii(patient.emerFirstname), web3.fromAscii(patient.emerLastname), web3.fromAscii(patient.emerRelationship), web3.fromAscii(patient.emerHomePhonenumber === "" || patient.emerHomePhonenumber === undefined ? "-" : patient.emerHomePhonenumber), web3.fromAscii(patient.emerMobileNumber), defaultAccount);
        contract.setEmergencyContactPart2(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.typeofHouse), patient.address, web3.fromAscii(patient.province), web3.fromAscii(patient.district), web3.fromAscii(patient.subDistrict), web3.fromAscii(patient.zipcode), defaultAccount);
      }

      if ((patient.fatherFirstname !== '' && patient.fatherLastname != '') || (patient.motherFirstname !== '' && patient.motherLastname != '') ) {
        contract.setPatientParent(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.fatherFirstname === "" ? "-" : patient.fatherFirstname), web3.fromAscii(patient.fatherLastname === "" ? " " : patient.fatherLastname), web3.fromAscii(patient.motherFirstname === "" ? "-" : patient.motherFirstname), web3.fromAscii(patient.motherLastname === "" ? " " : patient.motherFirstname), defaultAccount);
      }

      let check = false
      while (check === false) {
        check = await contract.haveCitizenId(web3.fromAscii(patient.citizenId));
        console.log("loop", check);
        if (check) {
          console.log("SUCCESS")
          return { status: true, message: "SUCCESS" };
        }
      }
    }
    return { status: false, message: "This email is already in the system." };
  }
  return { status: false, message: "This citizen ID is already in the system." };
}

const getPatient = async(citizenId) => {
  citizenId = web3.fromAscii(citizenId);
  let patient = {};
  let check = contract.haveCitizenId(citizenId);
  if(check){
   const InfoPatientPart1 = contract.getInfoPatientPart1(citizenId, defaultAccount);
   const InfoPatientPart2 = contract.getInfoPatientPart2(citizenId, defaultAccount);
   const InfoPatientPart3 = contract.getInfoPatientPart3(citizenId, defaultAccount);
   const InfoPatientPart4 = contract.getInfoPatientPart4(citizenId, defaultAccount);

   const AddressPatient = contract.getAddressPatient(citizenId, defaultAccount);
   const PatientAllergy = contract.getPatientAllergy(citizenId, defaultAccount);

   const EmergencyContactPart1 = contract.getEmergencyContactPart1(citizenId, defaultAccount);
   const EmergencyContactPart2 = contract.getEmergencyContactPart2(citizenId, defaultAccount);

   const PatientParent = contract.getPatientParent(citizenId, defaultAccount);

   patient.registerDate = web3.toAscii(InfoPatientPart1[0]).replace(/\u0000/g, '');
   patient.hospitalNumber= web3.toAscii(InfoPatientPart1[1]).replace(/\u0000/g, '');
   patient.citizenId= web3.toAscii(citizenId);
        //InfoPatient Part2
   patient.dob = web3.toAscii(InfoPatientPart2[0]).replace(/\u0000/g, '');
   patient.nameTitle = web3.toAscii(InfoPatientPart2[1]).replace(/\u0000/g, '');
   patient.firstname = web3.toAscii(InfoPatientPart2[2]).replace(/\u0000/g, '');
   patient.lastname = web3.toAscii(InfoPatientPart2[3]).replace(/\u0000/g, '');
   patient.gender = web3.toAscii(InfoPatientPart2[4]).replace(/\u0000/g, '');
        //InfoPatient Part3
   patient.congenitalDisease = web3.toAscii(InfoPatientPart3[0]).replace(/\u0000/g, '');
   patient.bloodgroup = web3.toAscii(InfoPatientPart3[1]).replace(/\u0000/g, '');
   patient.religion = web3.toAscii(InfoPatientPart3[2]).replace(/\u0000/g, '');
   patient.nationality = web3.toAscii(InfoPatientPart3[3]).replace(/\u0000/g, '');
   patient.country = web3.toAscii(InfoPatientPart3[4]).replace(/\u0000/g, '');
        //InfoPatient Part4
   patient.status = web3.toAscii(InfoPatientPart4[0]).replace(/\u0000/g, '');
   patient.occupartion = web3.toAscii(InfoPatientPart4[1]).replace(/\u0000/g, '');
   patient.homePhonenumber = web3.toAscii(InfoPatientPart4[2]).replace(/\u0000/g, '');
   patient.mobileNumber = web3.toAscii(InfoPatientPart4[3]).replace(/\u0000/g, '');
   patient.email = web3.toAscii(InfoPatientPart4[4]).replace(/\u0000/g, '');
        //AddressPatient
   patient.typeofHouse = web3.toAscii(AddressPatient[0]).replace(/\u0000/g, '');
   patient.address = AddressPatient[1];
   patient.province = web3.toAscii(AddressPatient[2]).replace(/\u0000/g, '');
   patient.district = web3.toAscii(AddressPatient[3]).replace(/\u0000/g, '');
   patient.subDistrict = web3.toAscii(AddressPatient[4]).replace(/\u0000/g, '');
   patient.zipcode = web3.toAscii(AddressPatient[5]).replace(/\u0000/g, '');
        //EmergencyContact Part1
   patient.emerTitle = web3.toAscii(EmergencyContactPart1[0]).replace(/\u0000/g, '');
   patient.emerFirstname = web3.toAscii(EmergencyContactPart1[1]).replace(/\u0000/g, '');
   patient.emerLastname = web3.toAscii(EmergencyContactPart1[2]).replace(/\u0000/g, '');
   patient.emerRelationship = web3.toAscii(EmergencyContactPart1[3]).replace(/\u0000/g, '');
   patient.emerHomePhonenumber = web3.toAscii(EmergencyContactPart1[4]).replace(/\u0000/g, '');
   patient.emerMobileNumber = web3.toAscii(EmergencyContactPart1[5]).replace(/\u0000/g, '');
        //EmergencyContact Part2
   patient.emerTypeofHouse = web3.toAscii(EmergencyContactPart2[0]).replace(/\u0000/g, '');
   patient.emerAddress = EmergencyContactPart2[1];
   patient.emerProvince = web3.toAscii(EmergencyContactPart2[2]).replace(/\u0000/g, '');
   patient.emerDistrict = web3.toAscii(EmergencyContactPart2[3]).replace(/\u0000/g, '');
   patient.emerSubDistrict = web3.toAscii(EmergencyContactPart2[4]).replace(/\u0000/g, '');
   patient.emerZipcode = web3.toAscii(EmergencyContactPart2[5]).replace(/\u0000/g, '');
        //PatientParent
   patient.fatherFirstname = web3.toAscii(PatientParent[0]).replace(/\u0000/g, '');
   patient.fatherLastname = web3.toAscii(PatientParent[1]).replace(/\u0000/g, '');
   patient.motherFirstname = web3.toAscii(PatientParent[2]).replace(/\u0000/g, '');
   patient.motherLastname = web3.toAscii(PatientParent[3]).replace(/\u0000/g, '');
        //PatientAllergy
   patient.allergy = web3.toAscii(PatientAllergy[0]).replace(/\u0000/g, '');
   patient.privilege = web3.toAscii(PatientAllergy[1]).replace(/\u0000/g, '');

   patient.age = calculateAge(web3.toAscii(InfoPatientPart2[0]).replace(/\u0000/g, ''));

   return { status: true, message: "SUCCESS" , data : patient};
  }
  return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please double-check and try again." , data : { patientInfo : patient }};

}

const calculateAge = birthday => {
  let dob = "" + birthday;
  let year = +moment().format("YYYY") - +dob.substring(6, 10);
  let month = +moment().format("MM") - +dob.substring(3, 5);
  let tmp = year + " Years old";
  if (year === 0) {
    month = month;
    tmp = year + " year " + month + " months";
  }
  return tmp;
};

module.exports = {
  insertPatient: insertPatient,
  getPatient: getPatient,
};