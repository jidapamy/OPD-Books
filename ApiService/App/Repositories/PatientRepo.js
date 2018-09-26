const { contract, defaultAccount } = require('../Lib/Web3')
const { convertString, bindData } = require('../Services/Utils')
const { patientScheme } = require("../Models/PatientModel")
const moment = require("moment");

const login = async (citizenId, password) => {
    const res = await contract.Login(convertString(citizenId), convertString(password));
    if (res) { return { status: true, message: "SUCCESS" } }
    return { status: false, message: "ERROR : Incorrect citizen Id or password" };
}

const get = citizenId => {
    const byteCitizenId = convertString(citizenId)
    const info1 = contract.getInfoPatientPart1(byteCitizenId, defaultAccount)
    const info2 = contract.getInfoPatientPart2(byteCitizenId, defaultAccount)
    const info3 = contract.getInfoPatientPart3(byteCitizenId, defaultAccount)
    const info4 = contract.getInfoPatientPart4(byteCitizenId, defaultAccount)
    const combindedInfoData = bindData(patientScheme, [info1, info2, info3, info4], 'info')

    const addressPatient = contract.getAddressPatient(byteCitizenId, defaultAccount)
    const combindedAddressData = bindData(patientScheme, [addressPatient], 'address')

    const allergyPatient = contract.getPatientAllergy(byteCitizenId, defaultAccount);
    const combindedAllergyData = bindData(patientScheme, [allergyPatient], 'allery')

    const emer1 = contract.getEmergencyContactPart1(byteCitizenId, defaultAccount);
    const emer2 = contract.getEmergencyContactPart2(byteCitizenId, defaultAccount);
    const combindedEmerData = bindData(patientScheme, [emer1, emer2], 'emerContact')

    const patientParent = contract.getPatientParent(byteCitizenId, defaultAccount);
    const combindedParentData = bindData(patientScheme, [patientParent], 'parent')

    let patient = { ...combindedInfoData, ...combindedAddressData, ...combindedAllergyData, ...combindedEmerData, ...combindedParentData }
    return { status: true, message: "SUCCESS", data: patient }
}

const getBasicData = citizenId => {
    const byteCitizenId = convertString(citizenId)
    const info1 = contract.getInfoPatientPart1(byteCitizenId, defaultAccount)
    const info2 = contract.getInfoPatientPart2(byteCitizenId, defaultAccount)
    const info3 = contract.getInfoPatientPart3(byteCitizenId, defaultAccount)
    const info4 = contract.getInfoPatientPart4(byteCitizenId, defaultAccount)
    const combindedInfoData = bindData(patientScheme, [info1, info2, info3, info4], 'info')

    const allergyPatient = contract.getPatientAllergy(byteCitizenId, defaultAccount);
    const combindedAllergyData = bindData(patientScheme, [allergyPatient], 'allery')

    let patient = { ...combindedInfoData, ...combindedAllergyData }
    return { status: true, message: "SUCCESS", data: patient }
}

const insert = async (patient) => {
    console.log(patient)
    contract.setInfoPatientPart1(convertString(patient.citizenId), convertString(moment().format("L")), convertString(patient.password), defaultAccount);
    contract.setInfoPatientPart2(convertString(patient.citizenId), convertString(patient.dob), convertString(patient.nameTitle), convertString(patient.firstname), convertString(patient.lastname), convertString(patient.gender), defaultAccount);
    contract.setInfoPatientPart3(convertString(patient.citizenId), convertString(patient.congenitalDisease), convertString(patient.bloodgroup), convertString(patient.religion), convertString(patient.nationality), convertString(patient.country), defaultAccount);
    contract.setInfoPatientPart4(
        convertString(patient.citizenId), 
        convertString(patient.status), 
        convertString(!patient.occupartion ? "-" : patient.occupartion), 
        convertString(!patient.homePhonenumber ? "-" : patient.homePhonenumber), 
        convertString(patient.mobileNumber), 
        convertString(patient.email), 
        defaultAccount);
    contract.setEmail(convertString(patient.email), defaultAccount);
    contract.setAddressPatient(convertString(patient.citizenId), convertString(patient.typeofHouse), patient.address, convertString(patient.province), convertString(patient.district), convertString(patient.subDistrict), convertString(patient.zipcode), defaultAccount);
    contract.setPatientAllergy(convertString(patient.citizenId), convertString(patient.allergy), convertString(patient.privilege), defaultAccount);

    if (patient.emerTitle || patient.emerFirstname || patient.emerLastname ) {
        contract.setEmergencyContactPart1(
            convertString(patient.citizenId), 
            convertString(patient.emerTitle), 
            convertString(patient.emerFirstname), 
            convertString(patient.emerLastname), 
            convertString(patient.emerRelationship), 
            convertString(!patient.emerHomePhonenumber ? "-" : patient.emerHomePhonenumber), 
            convertString(patient.emerMobileNumber), 
            defaultAccount);
        contract.setEmergencyContactPart2(
            convertString(patient.citizenId), 
            convertString(patient.typeofHouse), 
            patient.address, 
            convertString(patient.province), 
            convertString(patient.district), 
            convertString(patient.subDistrict), 
            convertString(patient.zipcode), 
            defaultAccount);
    }

    if ((patient.fatherFirstname && patient.fatherLastname) || (patient.motherFirstname  && patient.motherLastname )) {
        contract.setPatientParent(
            convertString(patient.citizenId), 
            convertString(!patient.fatherFirstname ? "-" : patient.fatherFirstname), 
            convertString(!patient.fatherLastname ? "-" : patient.fatherLastname), 
            convertString(!patient.motherFirstname ? "-" : patient.motherFirstname), 
            convertString(!patient.motherLastname ? "-" : patient.motherLastname), defaultAccount);
    }

    let check = false
    while (check === false) {
        check = await isPatient(patient.citizenId);
        if (check) {
            return { status: true, message: "SUCCESS" };
        }
    }
}

const isPatient = citizenId => {
    const byteCitizenId = convertString(citizenId)
    return contract.haveCitizenId(byteCitizenId);
}

const isEmail = citizenId => {
    const byteCitizenId = convertString(citizenId)
    return contract.haveEmail(byteCitizenId)
}

module.exports = {
    isPatient,
    login,
    isEmail,
    get,
    insert,
    getBasicData
};