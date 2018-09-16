const { isPatient, login } = require("./../repositories/patientRepo")

const msg = require("./../services/messageModel")
const loginCtr = async (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = await login(req.body.citizenId, req.body.password)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

module.exports = {
    loginCtr
};