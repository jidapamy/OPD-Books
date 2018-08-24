import { defaultAccount, contract, web3 } from "./../Lib/Web3";

export const setMedicalRecordForNurse = (medicalRecord) => {
   console.log("medicalRecord", medicalRecord);
   contract.setMedicalRecordForNursePart1(
       web3.fromAscii(medicalRecord.visitNumber), 
       web3.fromAscii(medicalRecord.clinic), 
       web3.fromAscii(medicalRecord.height), 
       web3.fromAscii(medicalRecord.bodyWeight), 
       web3.fromAscii(medicalRecord.bmi), 
       web3.fromAscii(medicalRecord.temperature), 
       web3.fromAscii(medicalRecord.dateTime)
    );  
    contract.setMedicalRecordForNursePart2(
       web3.fromAscii(medicalRecord.visitNumber), 
       web3.fromAscii(medicalRecord.pulseRate), 
       web3.fromAscii(medicalRecord.respiratoryRate), 
       web3.fromAscii(medicalRecord.BP1), 
       web3.fromAscii(medicalRecord.BP2), 
       web3.fromAscii(medicalRecord.BP3), 
       web3.fromAscii(medicalRecord.chiefComplaint),
       web3.fromAscii(medicalRecord.nurse.nameTitle+" "+medicalRecord.nurse.firstname+"  "+medicalRecord.nurse.lastname)
    );  
} 

export const setMedicalRecordForDocter = (medicalRecord) => {
   console.log("medicalRecord", medicalRecord);
   contract.setMedicalRecordForDocter(
       web3.fromAscii(medicalRecord.visitNumber), 
       web3.fromAscii(medicalRecord.clinic), 
       web3.fromAscii(medicalRecord.height), 
       web3.fromAscii(medicalRecord.bodyWeight), 
       web3.fromAscii(medicalRecord.bmi), 
       web3.fromAscii(medicalRecord.temperature), 
       web3.fromAscii(medicalRecord.dateTime)
    );  
    contract.setMedicalRecordForNursePart2(
       web3.fromAscii(medicalRecord.visitNumber), 
       web3.fromAscii(medicalRecord.presentIllness), 
       web3.fromAscii(medicalRecord.physicalExem), 
       web3.fromAscii(medicalRecord.diagnosis), 
       web3.fromAscii(medicalRecord.treatment), 
       web3.fromAscii(medicalRecord.recommendation), 
    );  
} 

// setMedicalRecordForDocter( bytes32  _visitNumber, string  _presentIllness, 
// string  _physicalExem , string  _diagnosis, string  _treatment, string  _recommendation, 
// string  _appointment ) 


// presentIllness: '',
//     physicalExem: '',
//     diagnosis: '',
//     treatment: '',
//     recommendation: '',
//     appointment: '',