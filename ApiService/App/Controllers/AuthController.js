const { isPatient, login } = require("../Repositories/PatientRepo")

const msg = require("../Services/Message")
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