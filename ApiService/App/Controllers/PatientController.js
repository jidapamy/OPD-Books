const { isPatient, isEmail, insert, get, getBasicData, edit } = require("../Repositories/PatientRepo")
const msg = require("../Services/Message")

const insertCtr = async (req, res) => {
    if (!isPatient(req.body.citizenId)) {
        if (!isEmail(req.body.email)) {
            const result = await insert(req.body)
            res.send(result)
            return;
        }
        res.send(msg.getMsgNotFound(msg.msgVariable.email));
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getCtr = (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = get(req.body.citizenId)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getBasicDataCtr = (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = getBasicData(req.body.citizenId)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const isCitizenIdCtr = (req, res) => {
    res.send(isPatient(req.body.citizenId))
}

const isEmailCtr = (req, res) => {
    res.send(isEmail(req.body.email))
}

const editCtr = async(req, res) => {
    if (!isPatient(req.body.citizenId)) {
        const result = await edit(req.body)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

module.exports = {
    insertCtr,
    getCtr,
    isCitizenIdCtr,
    isEmailCtr,
    getBasicDataCtr,
    editCtr
};
