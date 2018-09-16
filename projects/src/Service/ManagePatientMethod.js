import { defaultAccount, contract, web3 } from "./../Lib/Web3";
import moment from "moment";

export const insertPatient = (patient,date) => {
  console.log('patient!!!',patient)
    const hn = 'HP2312';
    contract.setInfoPatientPart1(web3.fromAscii(patient.citizenId), web3.fromAscii(date), web3.fromAscii(hn), web3.fromAscii(patient.password), defaultAccount);
    contract.setInfoPatientPart2(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.dob), web3.fromAscii(patient.nameTitle), web3.fromAscii(patient.firstname), web3.fromAscii(patient.lastname), web3.fromAscii(patient.gender), defaultAccount);
    contract.setInfoPatientPart3(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.congenitalDisease), web3.fromAscii(patient.bloodgroup), web3.fromAscii(patient.religion), web3.fromAscii(patient.nationality), web3.fromAscii(patient.country), defaultAccount);
    contract.setInfoPatientPart4(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.status), web3.fromAscii(patient.occupartion === '' ? '-' : patient.occupartion), web3.fromAscii(patient.homePhonenumber === '' ? '-' : patient.homePhonenumber ), web3.fromAscii(patient.mobileNumber), web3.fromAscii(patient.email), defaultAccount);
    contract.setEmail(web3.fromAscii(patient.email), defaultAccount);

    const result = contract.getInfoPatientPart1(web3.fromAscii(patient.citizenId));
    result.map(res => {
    })
    contract.setAddressPatient(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.typeofHouse), patient.address, web3.fromAscii(patient.province), web3.fromAscii(patient.district), web3.fromAscii(patient.subDistrict), web3.fromAscii(patient.zipcode), defaultAccount)

    contract.setPatientAllergy(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.allergy), web3.fromAscii(patient.privilege), defaultAccount);

    if (patient.emerTitle != '' || patient.emerFirstname != '' || patient.emerLastname != '') {
      contract.setEmergencyContactPart1(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.emerTitle), web3.fromAscii(patient.emerFirstname), web3.fromAscii(patient.emerLastname), web3.fromAscii(patient.emerRelationship), web3.fromAscii((patient.emerHomePhonenumber === '') || (patient.emerHomePhonenumber === undefined) ? '-' : patient.emerHomePhonenumber), web3.fromAscii(patient.emerMobileNumber), defaultAccount)
      contract.setEmergencyContactPart2(web3.fromAscii(patient.citizenId), web3.fromAscii(patient.typeofHouse), patient.address, web3.fromAscii(patient.province), web3.fromAscii(patient.district), web3.fromAscii(patient.subDistrict), web3.fromAscii(patient.zipcode), defaultAccount)
    }

    if ((patient.fatherFirstname !== '' && patient.fatherLastname != '') || (patient.motherFirstname !== '' && patient.motherLastname != '') ) {
      contract.setPatientParent(
        web3.fromAscii(patient.citizenId), 
        web3.fromAscii(patient.fatherFirstname === "" ? "-" : patient.fatherFirstname), 
        web3.fromAscii(patient.fatherLastname === "" ? " " : patient.fatherLastname), 
        web3.fromAscii(patient.motherFirstname === "" ? "-" : patient.motherFirstname), 
        web3.fromAscii(patient.motherLastname === "" ? " " : patient.motherFirstname), defaultAccount);
    }
  }

export const getPatient = (citizenId,type) => {
 
  citizenId = type === 'byte' ? citizenId : web3.fromAscii(citizenId) ;
  let patient = {};
   const InfoPatientPart1 = contract.getInfoPatientPart1(citizenId, defaultAccount);
   const InfoPatientPart2 = contract.getInfoPatientPart2(citizenId, defaultAccount);
   const InfoPatientPart3 = contract.getInfoPatientPart3(citizenId, defaultAccount);
   const InfoPatientPart4 = contract.getInfoPatientPart4(citizenId, defaultAccount);

   const AddressPatient = contract.getAddressPatient(citizenId, defaultAccount);
   const PatientAllergy = contract.getPatientAllergy(citizenId, defaultAccount);

   const EmergencyContactPart1 = contract.getEmergencyContactPart1(citizenId, defaultAccount);
   const EmergencyContactPart2 = contract.getEmergencyContactPart2(citizenId, defaultAccount);

   const PatientParent = contract.getPatientParent(citizenId, defaultAccount);

   patient.registerDate = web3.toAscii(InfoPatientPart1[0]);
   patient.hospitalNumber= web3.toAscii(InfoPatientPart1[1]);
   patient.citizenId= web3.toAscii(citizenId);
        //InfoPatient Part2
   patient.dob = web3.toAscii(InfoPatientPart2[0]);
   patient.nameTitle = web3.toAscii(InfoPatientPart2[1]);
   patient.firstname = web3.toAscii(InfoPatientPart2[2]);
   patient.lastname = web3.toAscii(InfoPatientPart2[3]);
   patient.gender = web3.toAscii(InfoPatientPart2[4]);
        //InfoPatient Part3
   patient.congenitalDisease = web3.toAscii(InfoPatientPart3[0]);
   patient.bloodgroup = web3.toAscii(InfoPatientPart3[1]);
   patient.religion = web3.toAscii(InfoPatientPart3[2]);
   patient.nationality = web3.toAscii(InfoPatientPart3[3]);
   patient.country = web3.toAscii(InfoPatientPart3[4]);
        //InfoPatient Part4
   patient.status = web3.toAscii(InfoPatientPart4[0]);
   patient.occupartion = web3.toAscii(InfoPatientPart4[1]);
   patient.homePhonenumber = web3.toAscii(InfoPatientPart4[2]);
   patient.mobileNumber = web3.toAscii(InfoPatientPart4[3]);
   patient.email = web3.toAscii(InfoPatientPart4[4]);
        //AddressPatient
   patient.typeofHouse = web3.toAscii(AddressPatient[0]);
   patient.address = AddressPatient[1];
   patient.province = web3.toAscii(AddressPatient[2]);
   patient.district = web3.toAscii(AddressPatient[3]);
   patient.subDistrict = web3.toAscii(AddressPatient[4]);
   patient.zipcode = web3.toAscii(AddressPatient[5]);
        //EmergencyContact Part1
   patient.emerTitle = web3.toAscii(EmergencyContactPart1[0]);
   patient.emerFirstname = web3.toAscii(EmergencyContactPart1[1]);
   patient.emerLastname = web3.toAscii(EmergencyContactPart1[2]);
   patient.emerRelationship = web3.toAscii(EmergencyContactPart1[3]);
   patient.emerHomePhonenumber = web3.toAscii(EmergencyContactPart1[4]);
   patient.emerMobileNumber = web3.toAscii(EmergencyContactPart1[5]);
        //EmergencyContact Part2
   patient.emerTypeofHouse = web3.toAscii(EmergencyContactPart2[0]);
   patient.emerAddress = EmergencyContactPart2[1];
   patient.emerProvince = web3.toAscii(EmergencyContactPart2[2]);
   patient.emerDistrict = web3.toAscii(EmergencyContactPart2[3]);
   patient.emerSubDistrict = web3.toAscii(EmergencyContactPart2[4]);
   patient.emerZipcode = web3.toAscii(EmergencyContactPart2[5]);
        //PatientParent
   patient.fatherFirstname = web3.toAscii(PatientParent[0]);
   patient.fatherLastname = web3.toAscii(PatientParent[1]);
   patient.motherFirstname = web3.toAscii(PatientParent[2]);
   patient.motherLastname = web3.toAscii(PatientParent[3]);
        //PatientAllergy
   patient.allergy = web3.toAscii(PatientAllergy[0]);
   patient.privilege = web3.toAscii(PatientAllergy[1])

   patient.age = calculateAge(web3.toAscii(InfoPatientPart2[0]));;

   console.log('get PATIENT!!',patient)
  return patient;

}

const calculateAge = birthday => {
  let dob = "" + birthday;
  let year = +moment().format("YYYY") - +dob.substring(6, 10);
  let month = +moment().format("MM") - +dob.substring(3, 5);
  let tmp = year + " ปี";
  if (year === 0) {
    month = month;
    tmp = year + " ปี " + month + " เดือน";
  }
  return tmp;
};