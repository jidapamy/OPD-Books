const { isPatient, isEmail, insert, get, getBasicData, edit, getPatientWithOTP, verifiedByCitizenId, cancelRequestOTP,
        forgotPasswordVerify, forgotPasswordConfirm } = require("../Repositories/PatientRepo")
const msg = require("../Services/Message")

const insertCtr = async (req, res) => {
    if (!isPatient(req.body.citizenId)) {
        if (!isEmail(req.body.email)) {
            try {
                const result = await insert(req.body)
                res.send(result)
                return;
            } catch (error) {
                res.send(msg.getMsgError(error))
                return;
            }
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

const editCtr = async (req, res) => {
    if (!isPatient(req.body.citizenId)) {
        const result = await edit(req.body)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

// const requestOTPCtr = async(req, res) => {
//     console.log(req.body)
//     if (req.body.phoneNumber){
//         requestOTP(req.body.phoneNumber,res)
//         return
//     }
//     res.send(msg.getMsgError("undefined"))
// }

// const validateOTPCtr = async (req, res) => {
//     console.log(req.body)
//     if (req.body.pin && req.body.requestId) {
//         const result = await validateOTP(req.body, res)
//         console.log("res",result)
//         // console.log(await validateOTP(req.body, res))
//         //  res.send("success")
//         return
//     }
//     res.send(msg.getMsgError("undefined"))
// }

const requestOTPCtr = async (req, res) => {
    if (isPatient(req.body.citizenId)) {
        if (req.body.requestId){
            const statusCancel = await cancelRequestOTP(req.body.requestId)
            if (!statusCancel.status){
                res.send(statusCancel)
                return
            }
        }
        const result = await verifiedByCitizenId(req.body.citizenId)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getPatientWithOTPCtr = async (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = await getPatientWithOTP(req.body)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const cancelRequestOTPCtr = async (req, res) => {
    const result = await cancelRequestOTP(req.body.requestId)
    res.send(result)
}

const forgotPasswordVerifyCtr = async (req, res) => {
    if (!isPatient(req.body.citizenId)) {
        try {
            const result = await forgotPasswordVerify(req.body.citizenId, req.body.dob)
            res.send(result)
            return
        } catch (error) {
            res.send(msg.getMsgError(error))
            return;
        }
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const forgotPasswordConfirmCtr = async (req, res) => {
    if (req.body.newPassword === req.body.newPasswordConfirm){
        if (!isPatient(req.body.citizenId)) {
            try {
                const result = await forgotPasswordConfirm(req.body.citizenId, req.body.newPassword)
                res.send(result)
                return
            } catch (error) {
                res.send(msg.getMsgError(error))
                return;
            }
        }
        res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
    }
    res.send(msg.getMsgError("Those password didn't match. Try again."))
}


module.exports = {
    insertCtr,
    getCtr,
    isCitizenIdCtr,
    isEmailCtr,
    getBasicDataCtr,
    editCtr,
    // requestOTPCtr,
    // validateOTPCtr,
    getPatientWithOTPCtr,
    requestOTPCtr,
    cancelRequestOTPCtr,

    forgotPasswordVerifyCtr,
    forgotPasswordConfirmCtr

};
