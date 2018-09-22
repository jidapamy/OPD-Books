const { web3, contract, defaultAccount } = require('../lib/web3')
const { convertString, convertToAscii, bindData } = require('../services/utils')
const moment = require("moment");
const { medicalRecordScheme } = require("../models/medicalRecordModel")

const notRequiredField = (value) => {
    if (value) {
        return value;
    }
    return "-"
}

const setMedicalRecordForNurse = async (medicalRecord) => {
    let medicalRecordId = (+contract.getLengthMedicalRecords() + 1) + "";
    contract.setMedicalRecordForNursePart1(
        convertString(medicalRecord.patientCitizenId),
        convertString(medicalRecordId),
        medicalRecord.clinic,
        convertString(medicalRecord.height),
        convertString(medicalRecord.bodyWeight),
        convertString(medicalRecord.bmi),
        convertString(medicalRecord.temperature),
        convertString(medicalRecord.date),
        convertString(medicalRecord.time),
        defaultAccount
    );
    contract.setMedicalRecordForNursePart2(
        convertString(medicalRecordId),
        convertString(medicalRecord.pulseRate),
        convertString(medicalRecord.respiratoryRate),
        convertString(notRequiredField(medicalRecord.BP1)),
        convertString(notRequiredField(medicalRecord.BP2)),
        convertString(notRequiredField(medicalRecord.BP3)),
        notRequiredField(medicalRecord.chiefComplaint),
        convertString(notRequiredField(medicalRecord.nurseName)),
        defaultAccount
        );
    let check = false
    while (check === false) {
        check = isMedicalRecord(medicalRecordId);
        if (check) {
            return { status: true, message: "SUCCESS", data: { medicalRecordId: medicalRecordId } };
        }
    }
}

const setMedicalRecordForDoctor = async medicalRecord => {
    console.log("setMedicalRecordForDoctor")
    contract.setMedicalRecordForDocter(
        convertString(medicalRecord.medicalRecordId),
        medicalRecord.presentIllness,
        medicalRecord.physicalExem,
        medicalRecord.diagnosis,
        medicalRecord.treatment,
        medicalRecord.recommendation,
        notRequiredField(medicalRecord.appointment),
        convertString(medicalRecord.doctorName),
        defaultAccount
    );

    contract.addHistoryMedicalRecord(
        convertString(medicalRecord.patientCitizenId),
        convertString(medicalRecord.medicalRecordId),
        defaultAccount
    );

    let checkTxDoctor = false;
    let checkTxAddHistory = false;
    while (!checkTxDoctor || !checkTxAddHistory) {
        checkTxDoctor = alreadyMedicalRecord(medicalRecord.medicalRecordId)
        checkTxAddHistory = haveMDRinPatientHistory(
            medicalRecord.patientCitizenId,
            medicalRecord.medicalRecordId
        )
        if (checkTxDoctor && checkTxAddHistory) {
            return { status: true, message: "SUCCESS" };
        }
    }
};

const getMedicalRecordForNurse = async (medicalRecordId) => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    const nurse1 = await contract.getMedicalRecordForNursePart1(byteMedicalRecordId);
    const nurse2 = await contract.getMedicalRecordForNursePart2(byteMedicalRecordId);
    const patientCitizenId = await contract.getPatientIdFormMDR(byteMedicalRecordId);
    const combindedNurseData = bindData(medicalRecordScheme, [nurse1, nurse2], 'nurse')
    let medicalRecord = combindedNurseData
    medicalRecord.medicalRecordId = medicalRecordId;
    medicalRecord.patientCitizenId = convertToAscii(patientCitizenId);

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecordForDoctor = async (medicalRecordId) => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    const doctor = await contract.getMedicalRecordForDocter(byteMedicalRecordId);
    const patientCitizenId = await contract.getPatientIdFormMDR(byteMedicalRecordId);

    const combindedDortorData = bindData(medicalRecordScheme, [doctor], 'doctor')
    let medicalRecord = combindedDortorData
    medicalRecord.medicalRecordId = medicalRecordId;
    medicalRecord.patientCitizenId = convertToAscii(patientCitizenId);

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecordForPharmacy= async (medicalRecordId) => {
    console.log(medicalRecordId)
    const byteMedicalRecordId = convertString(medicalRecordId)
    const pharmacy = await contract.getMedicalRecordForPharmacy(byteMedicalRecordId);
    const combindedPharmacyData = bindData(medicalRecordScheme, [pharmacy], 'pharmacy')
    let medicalRecord = combindedPharmacyData

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecord = async medicalRecordId => {
    let nurse = await getMedicalRecordForNurse(medicalRecordId);
    let doctor = await getMedicalRecordForDoctor(medicalRecordId);
    return { status: true, message: "SUCCESS", data: { ...nurse.data, ...doctor.data } };
}

const getMedicalRecordForShowHistory = async (citizenId, length) => {
    const byteCitizenId = convertString(citizenId)
    let medicalRecord = []
    for (let i = 0; i < length; i++) {
        let byteMedicalRecordId = await contract.getHistoryMedicalRecordPatient(byteCitizenId, i);
        let stringMedicalRecordId = convertToAscii(byteMedicalRecordId)
        const data = await contract.getMedicalRecordForShowHistory(byteMedicalRecordId)
        const combindedHistoryData = bindData(medicalRecordScheme, [data], 'history')
        combindedHistoryData.medicalRecordId = stringMedicalRecordId;
        medicalRecord.push(combindedHistoryData)
    }
    return { status: true, message: "SUCCESS", data: medicalRecord };

}

const getHistoryMedicalRecord = async (citizenId, length) => {
    const byteCitizenId = convertString(citizenId)
    let medicalRecord = []
    for (let i = 0; i < length; i++) {
        let byteMedicalRecordId = await contract.getHistoryMedicalRecordPatient(byteCitizenId, i);
        let stringMedicalRecordId = convertToAscii(byteMedicalRecordId)
        const { data } = await getMedicalRecord(stringMedicalRecordId)
        medicalRecord.push(data)
    }
    return { status: true, message: "SUCCESS", data: medicalRecord };

}
const isMedicalRecord = medicalRecordId => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    return contract.haveMedicalRecords(byteMedicalRecordId)
}

const alreadyMedicalRecord = medicalRecordId => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    return contract.alreadyDataInMedicalRecordsId(byteMedicalRecordId)
}

const haveMedicalRecordsOfPatient = (patientCitizenId, medicalRecordId) => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    const bytePatientCitizenId = convertString(patientCitizenId)
    return contract.haveMedicalRecordsOfPatient(bytePatientCitizenId, byteMedicalRecordId)
}

const haveMDRinPatientHistory = (patientCitizenId, medicalRecordId) => {
    const byteMedicalRecordId = convertString(medicalRecordId)
    const bytePatientCitizenId = convertString(patientCitizenId)
    return contract.haveHistoryOfPatient(bytePatientCitizenId, byteMedicalRecordId);
}

const lengthPatientHistory = (patientCitizenId) => {
    const bytePatientCitizenId = convertString(patientCitizenId)
    return +contract.countHistoryMedicalRecordForPatient(bytePatientCitizenId).toString();
}

module.exports = {
    setMedicalRecordForNurse,
    setMedicalRecordForDoctor,
    getMedicalRecordForNurse,
    getMedicalRecordForDoctor,
    isMedicalRecord,
    alreadyMedicalRecord,
    haveMedicalRecordsOfPatient,
    haveMDRinPatientHistory,
    getMedicalRecord,
    getHistoryMedicalRecord,
    lengthPatientHistory,
    getMedicalRecordForPharmacy,
    getMedicalRecordForShowHistory
};