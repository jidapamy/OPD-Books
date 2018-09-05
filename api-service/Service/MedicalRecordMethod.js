// import { getEmployee } from './ManageEmployeeMethod.js';
const WEB3 = require("../Server/Web3");
var moment = require("moment");
const web3 = WEB3.web3;
const contract = WEB3.contract;
const defaultAccount = WEB3.defaultAccount;

const setMedicalRecordForNurse = async(medicalRecord) => {
  console.log(medicalRecord)
  let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(medicalRecord.patientCitizenId));  
  if(checkCitizenId){
    let medicalRecordId = (+contract.getLengthMedicalRecords()+1)+"";
    contract.setMedicalRecordForNursePart1(
      web3.fromAscii(medicalRecord.patientCitizenId), 
      web3.fromAscii(medicalRecordId), 
      medicalRecord.clinic, 
      web3.fromAscii(medicalRecord.height), 
      web3.fromAscii(medicalRecord.bodyWeight), 
      web3.fromAscii(medicalRecord.bmi), 
      web3.fromAscii(medicalRecord.temperature), 
      web3.fromAscii(medicalRecord.date),
      web3.fromAscii(medicalRecord.time),
      defaultAccount
    );  
    contract.setMedicalRecordForNursePart2(
       web3.fromAscii(medicalRecordId), 
       web3.fromAscii(medicalRecord.pulseRate), 
       web3.fromAscii(medicalRecord.respiratoryRate), 
       web3.fromAscii(medicalRecord.BP1), 
       web3.fromAscii(medicalRecord.BP2), 
       web3.fromAscii(medicalRecord.BP3), 
       medicalRecord.chiefComplaint,
       web3.fromAscii(medicalRecord.nurseName),
       defaultAccount
    );  
    let check = false
    while (check === false) {
      check = await contract.checkTxCompleteForNurse(web3.fromAscii(medicalRecordId));
      if (check) {
        return { status: true, message: "SUCCESS" , data:{ medicalRecordId : medicalRecordId }};
      }
    }
  }
  return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please double-check and try again." };
} 

const setMedicalRecordForDocter = async medicalRecord => {
  let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(medicalRecord.patientCitizenId));  
  let checkMedicalRecordId = await contract.haveMedicalRecords(web3.fromAscii(medicalRecord.medicalRecordId));  // เชคว่า mdr มีอยู่จริงไหม
  let alreadyDataInMedicalRecordsId = await contract.alreadyDataInMedicalRecordsId(web3.fromAscii(medicalRecord.medicalRecordId))
  if(checkCitizenId){
    if(checkMedicalRecordId){
      if(!alreadyDataInMedicalRecordsId){
        let checkMedicalRecordsOfPatient = await contract.haveMedicalRecordsOfPatient(web3.fromAscii(medicalRecord.patientCitizenId),web3.fromAscii(medicalRecord.medicalRecordId)) // เชคว่า mdr นี้ของคนไข้คนนี้หรือป่าว
        if(checkMedicalRecordsOfPatient){
          contract.setMedicalRecordForDocter(
            web3.fromAscii(medicalRecord.medicalRecordId),
            medicalRecord.presentIllness,
            medicalRecord.physicalExem,
            medicalRecord.diagnosis,
            medicalRecord.treatment,
            medicalRecord.recommendation,
            medicalRecord.appointment,
            web3.fromAscii(medicalRecord.doctorName),
            defaultAccount
          );

          let check = false;
          while (check === false) {
            check = await contract.checkTxCompleteForDoctor(
              web3.fromAscii(medicalRecord.medicalRecordId),
              web3.fromAscii(medicalRecord.doctorName)
            );
            if (check) {
              return { status: true, message: "SUCCESS" };
            }
          }
        }
        return { status: false, message: "ERROR : The citizen ID and medical record ID are not match" };
      }
      return { status: false, message: "ERROR : It has medical record already. Please check again" };
    }
    return { status: false, message: "ERROR : This medical record ID is not in the system." };
  }
  return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please double-check and try again." };
}; 

const getMedicalRecordForNurse = async (medicalRecordId) => {
    let medicalRecord = {};
    let check = await contract.checkTxCompleteForNurse(web3.fromAscii(medicalRecordId));
    if(check){
        const nurse1 = contract.getMedicalRecordForNursePart1(web3.fromAscii(medicalRecordId));
        const nurse2 = contract.getMedicalRecordForNursePart2(web3.fromAscii(medicalRecordId));
        const patientCitizenId = contract.getPatientIdFormMDR(web3.fromAscii(medicalRecordId));
        medicalRecord.clinic = nurse1[0];
        medicalRecord.height = parseFloat(web3.toAscii(nurse1[1]));
        medicalRecord.bodyWeight = parseFloat(web3.toAscii(nurse1[2]));
        medicalRecord.bmi = parseFloat(web3.toAscii(nurse1[3]));
        medicalRecord.temperature = parseFloat(web3.toAscii(nurse1[4]));
        medicalRecord.date = web3.toAscii(nurse1[5]).replace(/\u0000/g, '');
        medicalRecord.time = web3.toAscii(nurse1[6]).replace(/\u0000/g, '');
        medicalRecord.medicalRecordId = medicalRecordId;

        medicalRecord.pulseRate = parseFloat(web3.toAscii(nurse2[0]));
        medicalRecord.respiratoryRate = parseFloat(web3.toAscii(nurse2[1]));
        medicalRecord.BP1 = web3.toAscii(nurse2[2]).replace(/\u0000/g, '');
        medicalRecord.BP2 = web3.toAscii(nurse2[3]).replace(/\u0000/g, '');
        medicalRecord.BP3 = web3.toAscii(nurse2[4]).replace(/\u0000/g, '');
        medicalRecord.chiefComplaint = nurse2[5];
        medicalRecord.nurseId = web3.toAscii(nurse2[6]).replace(/\u0000/g, '');
        medicalRecord.patientCitizenId = web3.toAscii(patientCitizenId).replace(/\u0000/g, '');

        return { status: true, message: "SUCCESS", data: medicalRecord };
    }
    return { status: false, message: "ERROR : This medical record ID is not in the system.", data: medicalRecord };

};

const getMedicalRecordForDocter = async(medicalRecordId) => {
    let medicalRecord = {};
    let check = await contract.checkTxCompleteForNurse(web3.fromAscii(medicalRecordId));
    let alreadyDataInMedicalRecordsId = await contract.alreadyDataInMedicalRecordsId(web3.fromAscii(medicalRecordId))
    if(check){
      if(alreadyDataInMedicalRecordsId){
        const doctor = await contract.getMedicalRecordForDocter(web3.fromAscii(medicalRecordId));
        const patientCitizenId = contract.getPatientIdFormMDR(web3.fromAscii(medicalRecordId));
        medicalRecord.presentIllness = doctor[0];
        medicalRecord.physicalExem = doctor[1];
        medicalRecord.diagnosis = doctor[2]
        medicalRecord.treatment = doctor[3];
        medicalRecord.recommendation = doctor[4];
        medicalRecord.appointment = doctor[5];
        medicalRecord.medicalRecordId = medicalRecordId;
        medicalRecord.doctorName = web3.toAscii(doctor[6]).replace(/\u0000/g, '');
        medicalRecord.patientCitizenId = web3.toAscii(patientCitizenId).replace(/\u0000/g, '');
        
        return { status: true, message: "SUCCESS", data: medicalRecord };
      }
      return { status: false, message: "ERROR : Doctor has not assign this medical record yet." };
    }
    return { status: false, message: "ERROR : This medical record ID is not in the system.", data: medicalRecord };
};

const getMedicalRecord = async medicalRecordId => {
  let check = await contract.checkTxCompleteForNurse(web3.fromAscii(medicalRecordId));
  let alreadyDataInMedicalRecordsId = await contract.alreadyDataInMedicalRecordsId(web3.fromAscii(medicalRecordId))
  let medicalRecord = {};
  if(check){
    if(alreadyDataInMedicalRecordsId){
      let nurse = await getMedicalRecordForNurse(medicalRecordId);
      let doctor = await getMedicalRecordForDocter(medicalRecordId);
      medicalRecord = { ...nurse.data, ...doctor.data };
      return { status: true, message: "SUCCESS", data: medicalRecord };
    }
    return { status: false, message: "ERROR : Doctor has not assign this medical record yet.",data: medicalRecord  };
  }
  return { status: false, message: "ERROR : This medical record ID is not in the system.", data: medicalRecord };
};

const addHistoryMedicalRecord = async( citizenId, medicalRecordId) => {
  let checkMedicalRecordId = await contract.haveMedicalRecords(web3.fromAscii(medicalRecordId));  // เชคว่า mdr มีอยู่จริงไหม
  let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(citizenId));  // เชคว่ามีคนนี้อยู่ไหม
  let alreadyDataInMedicalRecordsId = await contract.alreadyDataInMedicalRecordsId(web3.fromAscii(medicalRecordId))
  
  if(checkCitizenId){
    if(checkMedicalRecordId){
      let checkMedicalRecordsOfPatient = await contract.haveMedicalRecordsOfPatient(web3.fromAscii(citizenId),web3.fromAscii(medicalRecordId)) // เชคว่า mdr นี้ของคนไข้คนนี้หรือป่าว
      if(checkMedicalRecordsOfPatient){
        let haveHistoryOfPatient = contract.haveHistoryOfPatient( web3.fromAscii(citizenId), web3.fromAscii(medicalRecordId));
        if(!haveHistoryOfPatient){
          if (alreadyDataInMedicalRecordsId) {
            await contract.addHistoryMedicalRecord(web3.fromAscii(citizenId), web3.fromAscii(medicalRecordId), defaultAccount);
        
            let check = false;
            while (check === false) {
              check = await contract.haveHistoryOfPatient( web3.fromAscii(citizenId), web3.fromAscii(medicalRecordId));
              if (check) {
                return { status: true, message: "SUCCESS" };
              }
            }
          }
          return { status: false, message: "ERROR : Doctor has not assign this medical record yet." };
        }
        return { status: false, message: "ERROR : It has this medical record already." };
      }
      return { status: false, message: "ERROR : The citizen ID and medical record ID are not match." };
    }
    return { status: false, message: "ERROR : This medical record ID is not in the system." };
  }
  return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please double-check and try again." };
//   return { status: false, message: "ERROR : The citizen ID and medical record ID are not in the system" };
}

const getHistoryMedicalRecord = async (citizenId) => {
    let medicalRecord = [];
    let checkCitizenId = await contract.haveCitizenId(web3.fromAscii(citizenId));  
    if(checkCitizenId){
      const lengthHistory = +contract.countHistoryMedicalRecordForPatient(web3.fromAscii(citizenId)).toString();
      if(lengthHistory !== 0){
         for (let i = 0; i < lengthHistory; i++) {
             let medicalRecordId = await contract.getHistoryMedicalRecordPatient(web3.fromAscii(citizenId), i);
              let obj = {}
              const nurse1 = contract.getMedicalRecordForNursePart1(web3.toAscii(medicalRecordId));
              const nurse2 = contract.getMedicalRecordForNursePart2(web3.toAscii(medicalRecordId));
              const doctor = contract.getMedicalRecordForDocter(web3.toAscii(medicalRecordId));
              const patientCitizenId = contract.getPatientIdFormMDR(web3.toAscii(medicalRecordId));
              obj.medicalRecordId = web3.toAscii(medicalRecordId).replace(/\u0000/g, '');
              obj.clinic = nurse1[0];
              obj.height = parseFloat(web3.toAscii(nurse1[1]));
              obj.bodyWeight = parseFloat(web3.toAscii(nurse1[2]));
              obj.bmi = parseFloat(web3.toAscii(nurse1[3]));
              obj.temperature = parseFloat(web3.toAscii(nurse1[4]));
              obj.date = web3.toAscii(nurse1[5]).replace(/\u0000/g, '');
              obj.time = web3.toAscii(nurse1[6]).replace(/\u0000/g, '');

              obj.pulseRate = parseFloat(web3.toAscii(nurse2[0]));
              obj.respiratoryRate = parseFloat(web3.toAscii(nurse2[1]));
              obj.BP1 = web3.toAscii(nurse2[2]).replace(/\u0000/g, '');
              obj.BP2 = web3.toAscii(nurse2[3]).replace(/\u0000/g, '');
              obj.BP3 = web3.toAscii(nurse2[4]).replace(/\u0000/g, '');
              obj.chiefComplaint = nurse2[5];
              obj.nurseId = web3.toAscii(nurse2[6]).replace(/\u0000/g, '');
              obj.patientCitizenId = web3.toAscii(patientCitizenId).replace(/\u0000/g, '');

              obj.presentIllness = doctor[0];
              obj.physicalExem = doctor[1];
              obj.diagnosis = doctor[2];
              obj.treatment = doctor[3];
              obj.recommendation = doctor[4];
              obj.appointment = doctor[5];
              obj.doctorName = web3.toAscii(doctor[6]).replace(/\u0000/g, '');
              medicalRecord.push(obj);
         }
          return { status: true, message: "SUCCESS", data: medicalRecord };
      }
      return { status: false, message: "ERROR : Not have any history medical record ", data: medicalRecord };
    }
    return { status: false, message: "ERROR : The citizen ID you entered did not match our records. Please double-check and try again." , data: medicalRecord};
};

module.exports = {
  setMedicalRecordForNurse : setMedicalRecordForNurse,
  setMedicalRecordForDocter : setMedicalRecordForDocter,
  getMedicalRecordForNurse : getMedicalRecordForNurse,
  getMedicalRecordForDocter :getMedicalRecordForDocter,
  getMedicalRecord : getMedicalRecord,
  addHistoryMedicalRecord : addHistoryMedicalRecord,
  getHistoryMedicalRecord : getHistoryMedicalRecord
};