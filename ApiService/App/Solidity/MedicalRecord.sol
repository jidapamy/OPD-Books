pragma solidity ^0.4.19;

import "./PatientInformation.sol";

contract MedicalRecordContract is PatientInformationContract {
    
    struct MedicalRecord {
        MedicalRecordForNursePart1  MRFN1;
        MedicalRecordForNursePart2  MRFN2;
        MedicalRecordForDoctorByte  MRD;
        bytes32 patientCitizenId;
        uint treatmentYear;
    }
    
    struct MedicalRecordForNursePart1 {
       bytes clinic;
       bytes32 bodyHeight;
       bytes32 bodyWeight;
       bytes32 bmi;
       bytes32 temperature;
       bytes32 date;
       bytes32 time;
       uint medicalRecordId;
    }
    struct MedicalRecordForNursePart2 {
       bytes32 pulseRate;
       bytes32 respiratoryRate;
       bytes32 BP1;
       bytes32 BP2;
       bytes32 BP3;
       bytes chiefComplaint; 
       bytes32 nurseName;
    }
    
     struct MedicalRecordForDoctorByte {
       bytes presentIllness;
       bytes physicalExem;
       bytes diagnosis;
       bytes treatment;
       bytes recommendation;
       bytes appointment;
       bytes32 doctorName; 
    }
    
    struct MedicalRecordIdPatient {
        uint medicalRecordId;
    }
    
    
     mapping ( uint => MedicalRecord ) medicalRecords;
    //  mapping ( bytes32 => InfoEmployee ) infoEmployees;
     mapping ( bytes32 => MedicalRecordIdPatient[] ) medicalRecordIdPatients;
     mapping ( bytes32 => MedicalRecordIdPatient[] ) historyMedicalRecordPatients;
    //  mapping ( bytes32 => VisitNumberDocter[] ) visitNumberDocters;
    
    bytes32[] public medicalRecordList;
    
    // ใบการรักษา 
    function getMedicalRecordId(bytes32 _key) view public returns(uint) {
        uint medicalRecordId;
        if( medicalRecordList.length > 0){
            for(uint i=0;i<medicalRecordList.length;i++){
                if(keccak256(medicalRecordList[i]) == keccak256(_key)){
                   medicalRecordId = i;       
                }
            }
        }
        return medicalRecordId;
    }
    
    function getMedicalRecord(uint _index) view public returns(bytes32) {
        return medicalRecordList[_index];
    }
    
    function pushMedicalRecord(bytes32 _key) public {
        medicalRecordList.push(_key) -1;
    }
    
    function setMedicalRecordForNursePart1( bytes32 _patientCitizenId ,bytes32  _key, bytes  _clinic, bytes32  _bodyHeight , bytes32  _bodyWeight, bytes32  _bmi, bytes32  _temperature, bytes32  _date,bytes32  _time , uint _treatmentYear)  public {
                // _key >> citizen + time ที่รักษา
                medicalRecordList.push(_key) -1;
                uint medicalRecordId = getMedicalRecordId(_key);
                // bytes32 medicalRecordId = toBytes(id);
                // bytes32 medicalRecordId = toBytes(id);
                
                MedicalRecord storage medicalRecord = medicalRecords[medicalRecordId];
                medicalRecord.patientCitizenId = _patientCitizenId;
                medicalRecord.treatmentYear = _treatmentYear;
                medicalRecord.MRFN1.clinic = _clinic;
                medicalRecord.MRFN1.bodyHeight = _bodyHeight;
                medicalRecord.MRFN1.bodyWeight = _bodyWeight;
                medicalRecord.MRFN1.bmi = _bmi;
                medicalRecord.MRFN1.temperature = _temperature;
                medicalRecord.MRFN1.date = _date;
                medicalRecord.MRFN1.time = _time;
                medicalRecord.MRFN1.medicalRecordId = medicalRecordId;
                medicalRecordIdPatients[_patientCitizenId].push(MedicalRecordIdPatient(medicalRecordId)) -1;
    }
    
    function setMedicalRecordForNursePart2( uint _medicalRecordId, bytes32  _pulseRate, bytes32  _respiratoryRate , bytes32  _BP1, bytes32  _BP2, bytes32  _BP3, bytes  _chiefComplaint , bytes32 _nurseName)  public {
                MedicalRecord storage medicalRecord = medicalRecords[_medicalRecordId];
                medicalRecord.MRFN2.pulseRate = _pulseRate;
                medicalRecord.MRFN2.respiratoryRate = _respiratoryRate;
                medicalRecord.MRFN2.BP1 = _BP1;
                medicalRecord.MRFN2.BP2 = _BP2;
                medicalRecord.MRFN2.BP3 = _BP3;
                medicalRecord.MRFN2.chiefComplaint = _chiefComplaint;
                medicalRecord.MRFN2.nurseName = _nurseName;
    } 
     
    function setMedicalRecordForDoctor(uint _medicalRecordId, bytes  _presentIllness, bytes  _physicalExem , bytes  _diagnosis, bytes  _treatment, bytes  _recommendation, bytes  _appointment , bytes32 _doctorName)  public {
                MedicalRecord storage medicalRecord = medicalRecords[_medicalRecordId];
                medicalRecord.MRD.presentIllness = _presentIllness;
                medicalRecord.MRD.physicalExem = _physicalExem;
                medicalRecord.MRD.diagnosis = _diagnosis;
                medicalRecord.MRD.treatment = _treatment;
                medicalRecord.MRD.recommendation = _recommendation;
                medicalRecord.MRD.appointment = _appointment;
                medicalRecord.MRD.doctorName = _doctorName;
    }
    
  
    
    function getMedicalRecordForNursePart1(uint _medicalRecordId) view public  returns ( bytes , bytes32 , bytes32 , bytes32, bytes32 , bytes32, bytes32 ) {
        return ( 
                medicalRecords[_medicalRecordId].MRFN1.clinic,
                medicalRecords[_medicalRecordId].MRFN1.bodyHeight,
                medicalRecords[_medicalRecordId].MRFN1.bodyWeight,
                medicalRecords[_medicalRecordId].MRFN1.bmi,
                medicalRecords[_medicalRecordId].MRFN1.temperature,
                medicalRecords[_medicalRecordId].MRFN1.date,
                medicalRecords[_medicalRecordId].MRFN1.time
                );
    }
    
    function getMedicalRecordForNursePart2(uint _medicalRecordId) view public  returns ( bytes32 , bytes32 , bytes32, bytes32 , bytes32 , bytes ,bytes32 ) {
        return ( 
                medicalRecords[_medicalRecordId].MRFN2.pulseRate,
                medicalRecords[_medicalRecordId].MRFN2.respiratoryRate,
                medicalRecords[_medicalRecordId].MRFN2.BP1,
                medicalRecords[_medicalRecordId].MRFN2.BP2,
                medicalRecords[_medicalRecordId].MRFN2.BP3,
                medicalRecords[_medicalRecordId].MRFN2.chiefComplaint,
                medicalRecords[_medicalRecordId].MRFN2.nurseName
                );
    }
    
    function getMedicalRecordForDoctor(uint _medicalRecordId) view public  returns ( bytes , bytes , bytes, bytes , bytes , bytes ,bytes32) {
        return ( 
                medicalRecords[_medicalRecordId].MRD.presentIllness,
                medicalRecords[_medicalRecordId].MRD.physicalExem,
                medicalRecords[_medicalRecordId].MRD.diagnosis,
                medicalRecords[_medicalRecordId].MRD.treatment,
                medicalRecords[_medicalRecordId].MRD.recommendation,
                medicalRecords[_medicalRecordId].MRD.appointment,
                medicalRecords[_medicalRecordId].MRD.doctorName
                );
    }
    
    function getMedicalRecordForPharmacy(uint _medicalRecordId) view public  returns ( bytes , bytes , bytes ,bytes32,bytes32) {
        return ( 
                medicalRecords[_medicalRecordId].MRD.treatment,
                medicalRecords[_medicalRecordId].MRD.recommendation,
                medicalRecords[_medicalRecordId].MRD.appointment,
                medicalRecords[_medicalRecordId].MRD.doctorName,
                medicalRecords[_medicalRecordId].patientCitizenId
                );
    }
    
    function getMedicalRecordForShowHistory(uint _medicalRecordId) view public  returns (  bytes32,bytes32,bytes ) {
        return ( 
                medicalRecords[_medicalRecordId].MRFN1.date,
                medicalRecords[_medicalRecordId].MRD.doctorName,
                medicalRecords[_medicalRecordId].MRFN1.clinic
                );
    }
    
    function addHistoryMedicalRecord(bytes32 _patientCitizenId, uint _medicalRecordId) public {
            historyMedicalRecordPatients[_patientCitizenId].push(MedicalRecordIdPatient(_medicalRecordId)) -1;
    }

    function getHistoryMedicalRecordPatient(bytes32 id,uint index) view public returns (uint) {
        uint result; 
        MedicalRecordIdPatient[] storage tmp = historyMedicalRecordPatients[id];
        if(historyMedicalRecordPatients[id].length > 0){
            result = tmp[index].medicalRecordId;
        }
        return result;
    }
    
    function countHistoryMedicalRecordForPatient(bytes32 _patientCitizenId) view public returns (uint) {
        return historyMedicalRecordPatients[_patientCitizenId].length;
    }
    
    function getLengthMedicalRecords() view public returns (uint) {
        return medicalRecordList.length;
    }

    function haveMedicalRecords(uint _medicalRecordId) view public returns(bool) {
        bool status;
        if(keccak256(medicalRecords[_medicalRecordId].MRFN1.medicalRecordId)==keccak256(_medicalRecordId) ){
            status=true;
        }
        return status;
    }
    
    function getMedicalRecordInfo(uint _medicalRecordId) view public returns(bytes32,uint){
        return  (
                medicalRecords[_medicalRecordId].patientCitizenId,
                medicalRecords[_medicalRecordId].treatmentYear
                );
    }
    
    function haveMedicalRecordsOfPatient(bytes32 _patientCitizenId,uint _medicalRecordId) view public returns(bool) {
        bool status;
        MedicalRecordIdPatient[] storage tmp = medicalRecordIdPatients[_patientCitizenId];
        if( tmp.length > 0){
            for(uint i=0;i<tmp.length;i++){
                if(keccak256(tmp[i].medicalRecordId) == keccak256(_medicalRecordId)){
                    status=true;       
                }
            }
        }
        return status;
    }
    
    function haveHistoryOfPatient(bytes32 _patientCitizenId,uint _medicalRecordId) view public returns(bool) {
        bool status;
        MedicalRecordIdPatient[] storage tmp = historyMedicalRecordPatients[_patientCitizenId];
        if( tmp.length > 0){
            for(uint i=0;i<tmp.length;i++){
                if(keccak256(tmp[i].medicalRecordId) == keccak256(_medicalRecordId)){
                    status=true;       
                }
            }
        }
        return status;
    }
    
    function alreadyDataInMedicalRecordsId (uint _medicalRecordId) view public returns(bool) {
        bool status;
        bytes32 empty;
        if(keccak256(medicalRecords[_medicalRecordId].MRD.doctorName)!=keccak256(empty) ){
            status=true;
        }
        return status;
    }
    
    //sort
    function checkTreatmentYear(bytes32 _patientCitizenId, uint _index, uint _year) view public  returns ( bool ) {
        MedicalRecordIdPatient[] storage tmp = historyMedicalRecordPatients[_patientCitizenId];
        uint medicalRecordId = tmp[_index].medicalRecordId;
        if(medicalRecords[medicalRecordId].treatmentYear == _year){
            return true;
        }
        return false;
    }
}
