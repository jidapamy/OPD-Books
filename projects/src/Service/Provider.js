import { defaultAccount, contract, web3 } from "./../Lib/Web3";
import moment from "moment";


// get Patient and calculate age
export const getInfoPatient = (id, qId) => {
  let infoPatient1 = contract.getInfoPatientPart1(web3.fromAscii(id));
  let infoPatient2 = contract.getInfoPatientPart2(web3.fromAscii(id));
  let infoPatient3 = contract.getInfoPatientPart3(web3.fromAscii(id));
  let patientAllergy = contract.getPatientAllergy(web3.fromAscii(id));

  let patient = {};
  patient.hospitalNumber = web3.toAscii(infoPatient1[1]);
  patient.citizenId = web3.toAscii(infoPatient1[2]);
  patient.dob = web3.toAscii(infoPatient2[0]);
  patient.nameTitle = web3.toAscii(infoPatient2[1]);
  patient.firstname = web3.toAscii(infoPatient2[2]);
  patient.lastname = web3.toAscii(infoPatient2[3]);
  patient.gender = web3.toAscii(infoPatient2[4]);
  patient.congenitalDisease = web3.toAscii(infoPatient3[0]);
  patient.bloodgroup = web3.toAscii(infoPatient3[1]);
  patient.nationality = web3.toAscii(infoPatient3[3]);
  patient.allergy = web3.toAscii(patientAllergy[0]);
  patient.privilege = web3.toAscii(patientAllergy[1]);

  patient.age = calculateAge(web3.toAscii(infoPatient2[0]));;

  return patient;
};

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