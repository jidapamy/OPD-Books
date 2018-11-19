const router = require("express").Router();
const { knexSIT, knexKMUTT } = require("./knex")
const msg = require("./services")

router.post("/:clinic/addPatient", async (req, res) => addPatient(req, res));
router.post("/:clinic/checkPatient", async (req, res) => checkPatient(req, res));
router.post("/:clinic/getPatientFromDB", async (req, res) => getPatientFromDB(req, res));

router.get("/:clinic/getAllQueues", async (req, res) => getAllQueues(req, res));
router.get("/:clinic/getQueuesWithRole/:empRole", async (req, res) => getQueuesWithRole(req, res));
router.get("/:clinic/getQueue/:queueId", async (req, res) => getQueue(req, res))
router.post("/:clinic/addQueue", async (req, res) => addQueue(req, res))
router.post("/:clinic/deleteAllQueues", async (req, res) => deleteAllQueues(req, res))
router.post("/:clinic/deleteQueue", async (req, res) => deleteQueue(req, res))
router.post("/:clinic/updateQueue", async (req, res) => updateQueue(req, res))

router.get("/:clinic/getAllMedicalRecords", async (req, res) => getAllMedicalRecords(req, res));
router.get("/:clinic/getMedicalRecord/:mdrId", async (req, res) => getMedicalRecord(req, res))
router.post("/:clinic/addMedicalRecordForNurse", async (req, res) => addMedicalRecordForNurse(req, res))
router.get("/:clinic/getMedicalRecordForNurse/:mdrId", async (req, res) => getMedicalRecordForNurse(req, res))
router.post("/:clinic/addMedicalRecordForDoctor", async (req, res) => addMedicalRecordForDoctor(req, res))

router.post("/:clinic/updateMedicalRecord", async (req, res) => updateMedicalRecord(req, res))


const attributesPatient = [
    "allergy", "bloodgroup", "citizenId", "country", "congenitalDisease", "dob", "firstname", "gender",
    "homePhonenumber", "lastname", "mobileNumber", "nametitle", "nationality", "occupartion", "privilege",
    "religion", "status", "email", "typeofHouse", "address", "province", "district", "subDistrict", "zipcode",
    "emerTitle", "emerFirstname", "emerLastname", "emerRelationship", "emerHomePhonenumber", "emerMobileNumber", 
    "emerTypeofHouse", "emerAddress", "emerProvince", "emerDistrict", "emerSubDistrict", "emerZipcode", 
    "fatherFirstname", "fatherLastname","motherFirstname", "motherLastname", 
]

const attributesNurse = [
    "height", "bodyWeight", "bmi", "temperature", "date", "time",
    "pulseRate", "respiratoryRate", "BP1", "BP2", "BP3", "chiefComplaint", "nurseName"
]

const attributesDoctor = [
    "presentIllness", "physicalExem", "diagnosis", "treatment", "recommendation", "appointment", "doctorName",
]

const attributesMDR = [
    "citizenId", "initialTreatmentId","diagnosisId"
]

const checkClinic = (clinic) => {
    if (clinic == "KMUTT"){
        return knexKMUTT
    }else if(clinic == "SIT"){
        return knexSIT
    }
}


// PATIENT
const addPatient = async (req, res) => {
    let tmp = {}
    attributesPatient.map(attr => {
        tmp[attr] = req.body[attr]
    })
    try {
        let data = await checkClinic(req.params.clinic)
            .table("Patients")
            .insert(tmp);
        res.send(msg.getMsgSuccess())
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

const checkPatient = async (req, res) => {
    // console.log(req.body)
    try {
        let data = await checkClinic(req.params.clinic)
            .table("Patients")
            .where("citizenId", req.body.citizenId)
        if (data.length > 0) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

const getPatientFromDB = async (req, res) => {
    // console.log(req.body)
    try {
        let data = await checkClinic(req.params.clinic)
        .select()
            .from('Patients')
            .where("citizenId", req.body.citizenId)
        res.send(msg.getMsgSuccess(null, data[0]))
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

//QUEUE
const getAllQueues = async (req, res) => {
    console.log(req.params.clinic)
    let data = await checkClinic(req.params.clinic)
    .select()
        .from('Queues')
        .orderBy('queueId', 'asc')
    res.send(msg.getMsgSuccess(null, data))
}

const getQueue = async (req, res) => {
    let data = await checkClinic(req.params.clinic)
    .select()
        .from('Queues')
        .where("queueId", req.params.queueId)
    res.send(msg.getMsgSuccess(null, data[0]))
}

const getQueuesWithRole = async (req, res) => {
    // console.log(req.params.empRole)
    let data = await checkClinic(req.params.clinic)('Queues')
        .join('Patients', 'Patients.citizenId', '=', 'Queues.citizenId')
        .where("Queues.status", req.params.empRole)
        .select()
    res.send(msg.getMsgSuccess(null, data))
}

const addQueue = async (req, res) => {
    let date = new Date()
    let ran = Math.floor((Math.random() * 999999) + 100000);
    let vn = date.getDate() + '' + date.getMonth() + '' + date.getFullYear() + '' + date.getMinutes() + '' + ran
    // console.log(vn)
    try {
        let data = await checkClinic(req.params.clinic).select()
            .from('Queues')
            .where("citizenId", req.body.citizenId)
            .where('status',"!=", 5)
        console.log("patient in queue" , data)
        if(data.length === 0){
            console.log('data',data)
            await checkClinic(req.params.clinic)
                .table("Queues")
                .insert({
                    status: req.body.status,
                    visitNumber: vn,
                    citizenId: req.body.citizenId
                })
            res.send(msg.getMsgSuccess())
        }else{
            res.send(msg.getMsgError("Cannot add queue. this patient is already in queues"))
        }
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

const deleteAllQueues = async (req, res) => {
    // deleteAllQueue ทุกๆ 1 วัน
    await checkClinic(req.params.clinic)('Queues').del()
    res.send(msg.getMsgSuccess())
}

const deleteQueue = async (req, res) => {
    // deleteAllQueue ทุกๆ 1 วัน
    await checkClinic(req.params.clinic)('Queues')
        .where("queueId", req.body.queueId)
        .del()
    res.send(msg.getMsgSuccess())
}

const updateQueue = async (req, res) => {
    // updateStatusQ >> 2:nurse,3:doctor,4:pharmacy
    if(req.body.mdrId){
        await checkClinic(req.params.clinic)('Queues')
            .where("queueId", req.body.queueId)
            .update({
                status: req.body.status,
                mdrId : req.body.mdrId
            })
    }else{
        await checkClinic(req.params.clinic)('Queues')
            .where("queueId", req.body.queueId)
            .update({
                status: req.body.status
            })
    }
    res.send(msg.getMsgSuccess())
}

//MEDICAL RECORD
const getAllMedicalRecords = async (req, res) => {
    let data = await checkClinic(req.params.clinic).select()
        .from('MedicalRecords')
        .orderBy('mdrId', 'asc')
    res.send(msg.getMsgSuccess(null, data))
}

const getMedicalRecord = async (req, res) => {
    let data = await checkClinic(req.params.clinic).select()
        .where("mdrId", req.params.mdrId)
        .from('MedicalRecords')
        .join('InitialTreatment', 'MedicalRecords.initialTreatmentId', '=', 'InitialTreatment.id')
        .join('Diagnosis', 'MedicalRecords.diagnosisId', '=', 'Diagnosis.id')
    res.send(msg.getMsgSuccess(null, data[0]))
}

const getMedicalRecordWithCitizenId = async (req, res) => {
    let data = await checkClinic(req.params.clinic)('MedicalRecord')
        .join('Queues', 'MedicalRecord.visitNumber', '=', 'Queues.visitNumber')
        .where("MedicalRecord.citizenId", req.params.citizenId)
        .select()
    res.send(msg.getMsgSuccess(null, data))
}

addMedicalRecordForNurse = async (req, res) => {
    try {
        let tmp = {}
        attributesNurse.map(attr => {
            tmp[attr] = req.body[attr] ? req.body[attr] : null
        })
        await checkClinic(req.params.clinic)('InitialTreatment')
            .insert(tmp)
            .then(result => {
                let med = {
                    visitNumber: req.body.visitNumber,
                    citizenId: req.body.patientCitizenId, 
                    initialTreatmentId: result
                }
                checkClinic(req.params.clinic)('MedicalRecords')
                .insert(med)
                .then(result => {
                    res.send(msg.getMsgSuccess(null, { medicalRecordId: result }))
                })
            })
            .catch(error => {
                res.send(msg.getMsgError(error))
            })
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}


getMedicalRecordForNurse = async (req, res) => {
    try {
        let data = await checkClinic(req.params.clinic).select()
            .where("MedicalRecords.mdrId", req.params.mdrId)
            .from('MedicalRecords')
            .join('InitialTreatment', 'MedicalRecords.initialTreatmentId', '=', 'InitialTreatment.id')
        res.send(msg.getMsgSuccess(null, data[0]))
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

addMedicalRecordForDoctor = async (req, res) => {
    try {
        let tmp = {}
        attributesDoctor.map(attr => {
            tmp[attr] = req.body[attr] ? req.body[attr] : null
        })
        await checkClinic(req.params.clinic)('Diagnosis')
            .insert(tmp)
            .then(async result => {
                await checkClinic(req.params.clinic)('MedicalRecords')
                    .where("mdrId", req.body.mdrId)
                    .update({
                        diagnosisId: result,
                    })
                res.send(msg.getMsgSuccess())
            })
            .catch(error => {
                res.send(msg.getMsgError(error))
            })
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}


// const addMedicalRecord = async (req, res) => {
//     try {
//         console.log(req.body)
//         let tmp = {}
//         attributesMDR.map(attr => {
//             tmp[attr] = req.body[attr] ? req.body[attr] : null
//         })
//         console.log("tmp", tmp)
//         await checkClinic
//             .table("MedicalRecord")
//             .insert(tmp)
//             .then(result => {
//                 res.send(msg.getMsgSuccess(null, { medicalRecordId: result }))
//             })
//             .catch(error => {
//                 res.send(msg.getMsgError(error))
//             })
//     } catch (error) {
//         res.send(msg.getMsgError(error))
//     }
// }

const updateMedicalRecord = async (req, res) => {
    try {
        await checkClinic(req.params.clinic)('MedicalRecord')
            .where("mdrId", req.body.mdrId)
            .update(req.body.medicalRecord)
        res.send(msg.getMsgSuccess())
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

module.exports = router;