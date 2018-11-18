const router = require("express").Router();
const knex = require("./knex")
const msg = require("./services")

router.post("/addPatient", async (req, res) => addPatient(req, res));
router.post("/checkPatient", async (req, res) => checkPatient(req, res));
router.post("/getPatientFromDB", async (req, res) => getPatientFromDB(req, res));

router.get("/getAllQueues", async (req, res) => getAllQueues(req, res));
router.get("/getQueuesWithRole/:empRole", async (req, res) => getQueuesWithRole(req, res));
router.get("/getQueue/:queueId", async (req, res) => getQueue(req, res))
router.post("/addQueue", async (req, res) => addQueue(req, res))
router.post("/deleteAllQueues", async (req, res) => deleteAllQueues(req, res))
router.post("/deleteQueue", async (req, res) => deleteQueue(req, res))
router.post("/updateQueue", async (req, res) => updateQueue(req, res))

router.get("/getAllMedicalRecords", async (req, res) => getAllMedicalRecords(req, res));
router.get("/getMedicalRecord/:mdrId", async (req, res) => getMedicalRecord(req, res))
router.post("/addMedicalRecordForNurse", async (req, res) => addMedicalRecordForNurse(req, res))
router.get("/getMedicalRecordForNurse/:mdrId", async (req, res) => getMedicalRecordForNurse(req, res))
router.post("/addMedicalRecordForDoctor", async (req, res) => addMedicalRecordForDoctor(req, res))

router.post("/updateMedicalRecord", async (req, res) => updateMedicalRecord(req, res))


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

// PATIENT
const addPatient = async (req, res) => {
    // console.log(req.body)
    let tmp = {}
    attributesPatient.map(attr => {
        tmp[attr] = req.body[attr]
    })
    try {
        let data = await knex
            .table("Patients")
            .insert(tmp);
        // console.log(data)
        res.send(msg.getMsgSuccess())
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

const checkPatient = async (req, res) => {
    // console.log(req.body)
    try {
        let data = await knex
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
        let data = await knex.select()
            .from('Patients')
            .where("citizenId", req.body.citizenId)
        res.send(msg.getMsgSuccess(null, data[0]))
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

//QUEUE
const getAllQueues = async (req, res) => {
    let data = await knex.select()
        .from('Queues')
        .orderBy('queueId', 'asc')
    res.send(msg.getMsgSuccess(null, data))
}

const getQueue = async (req, res) => {
    let data = await knex.select()
        .from('Queues')
        .where("queueId", req.params.queueId)
    res.send(msg.getMsgSuccess(null, data[0]))
}

const getQueuesWithRole = async (req, res) => {
    // console.log(req.params.empRole)
    let data = await knex('Queues')
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
        let data = await knex.select()
            .from('Queues')
            .where("citizenId", req.body.citizenId)
            .where('status',"!=", 5)
        console.log("patient in queue" , data)
        if(data.length === 0){
            console.log('data',data)
            await knex
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
    await knex('Queues').del()
    res.send(msg.getMsgSuccess())
}

const deleteQueue = async (req, res) => {
    // deleteAllQueue ทุกๆ 1 วัน
    await knex('Queues')
        .where("queueId", req.body.queueId)
        .del()
    res.send(msg.getMsgSuccess())
}

const updateQueue = async (req, res) => {
    // updateStatusQ >> 2:nurse,3:doctor,4:pharmacy
    if(req.body.mdrId){
        await knex('Queues')
            .where("queueId", req.body.queueId)
            .update({
                status: req.body.status,
                mdrId : req.body.mdrId
            })
    }else{
        await knex('Queues')
            .where("queueId", req.body.queueId)
            .update({
                status: req.body.status
            })
    }
    res.send(msg.getMsgSuccess())
}

//MEDICAL RECORD
const getAllMedicalRecords = async (req, res) => {
    let data = await knex.select()
        .from('MedicalRecords')
        .orderBy('mdrId', 'asc')
    res.send(msg.getMsgSuccess(null, data))
}

const getMedicalRecord = async (req, res) => {
    let data = await knex.select()
        .where("mdrId", req.params.mdrId)
        .from('MedicalRecords')
        .join('InitialTreatment', 'MedicalRecords.initialTreatmentId', '=', 'InitialTreatment.id')
        .join('Diagnosis', 'MedicalRecords.diagnosisId', '=', 'Diagnosis.id')
    res.send(msg.getMsgSuccess(null, data[0]))
}

const getMedicalRecordWithCitizenId = async (req, res) => {
    let data = await knex('MedicalRecord')
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
        await knex('InitialTreatment')
            .insert(tmp)
            .then(result => {
                let med = {
                    visitNumber: req.body.visitNumber,
                    citizenId: req.body.patientCitizenId, 
                    initialTreatmentId: result
                }
                knex('MedicalRecords')
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
        let data = await knex.select()
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
        await knex('Diagnosis')
            .insert(tmp)
            .then(async result => {
                await knex('MedicalRecords')
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
//         await knex
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
        await knex('MedicalRecord')
            .where("mdrId", req.body.mdrId)
            .update(req.body.medicalRecord)
        res.send(msg.getMsgSuccess())
    } catch (error) {
        res.send(msg.getMsgError(error))
    }
}

module.exports = router;