const { isPatient, isEmail, insert, get, getBasicData, edit, checkPassword, getPatientWithOTP, verifiedByCitizenId, cancelRequestOTP,
    forgotPasswordVerify, confirmChangePassword, validateOTPvalue, requestOTPwithMobile, getEmailUser } = require("../Repositories/PatientRepo")
const { lockAccount } = require('../Services/Utils')
const { sendVerifyEmail } = require("../Repositories/AuthenticationRepo")
const msg = require("../Services/Message")

const insertCtr = async (req, res) => {
    console.log("Insert ",req.body)
    if (!isPatient(req.body.citizenId)) {
        if (!isEmail(req.body.email)) {
            try {
                const result = await insert(req.body)
                res.send(result)
                return;
            } catch (error) {
                console.log(error)
                res.send(msg.getMsgError(error))
                lockAccount()
                return;
            }
        }
        res.send(msg.getMsgDuplicate(msg.msgVariable.email));
        // lockAccount()
        return;
    }
    res.send(msg.getMsgDuplicate(msg.msgVariable.citizenID));
    // lockAccount()
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

const isPatientCtr = (req, res) => {
    res.send(isPatient(req.body.citizenId))
}

const isEmailCtr = (req, res) => {
    res.send(isEmail(req.body.email))
}

const editCtr = async (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = await edit(req.body)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const checkPasswordCtr = (req, res) => {
    res.send(checkPassword(req.body.citizenId, req.body.password))
}

const requestOTPCtr = async (req, res) => {
    // without citizenId
    if (req.body.requestId) {
        const statusCancel = await cancelRequestOTP(req.body.requestId)
        if (!statusCancel.status) {
            res.send(statusCancel)
            return
        }
    }
    if (req.body.mobileNumber) {
        const requestOTP = await requestOTPwithMobile(req.body.mobileNumber)
        if (requestOTP) {
            res.send(requestOTP)
            return
        }
    }
    if (isPatient(req.body.citizenId)) {
        // without mobile number
        const result = await verifiedByCitizenId(req.body.citizenId)
        res.send(result)
        return;
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getPatientWithOTPCtr = async (req, res) => {
    if (isPatient(req.body.citizenId)) {
        const result = await getPatientWithOTP(req.body)
        console.log("result",result)
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
    if (isPatient(req.body.citizenId)) {
        try {
            const result = await forgotPasswordVerify(req.body.citizenId, req.body.dob)
            if (req.body.genVerificationCode) {
                if (result) {
                    try {
                        const nameAndEmail = await getEmailUser(req.body.citizenId)
                        await sendVerifyEmail({ ...nameAndEmail, ...{ genVerificationCode: req.body.genVerificationCode } })
                        res.send(msg.getMsgSuccess(null, nameAndEmail))
                    } catch (error) {
                        res.send(msg.getMsgError(error))
                    }
                } else {
                    res.send(msg.getMsgNotMatch(msg.msgVariable.citizenID, msg.msgVariable.dob))
                }
                lockAccount()
                return
            }
            if (result) {
                res.send(msg.getMsgSuccess())
            } else {
                res.send(msg.getMsgNotMatch(msg.msgVariable.citizenID, msg.msgVariable.dob))
            }
            lockAccount()
            return
        } catch (error) {
            res.send(msg.getMsgError(error))
            lockAccount()
            return;
        }
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const confirmChangePasswordCtr = async (req, res) => {
    console.log("confirmChangePasswordCtr", req.body)
    if (req.body.newPassword === req.body.newPasswordConfirm) {
        if (isPatient(req.body.citizenId)) {
            try {
                const result = await confirmChangePassword(req.body.citizenId, req.body.newPassword, req.body.oldPassword)
                res.send(result)
                lockAccount()
                return
            } catch (error) {
                res.send(msg.getMsgError(error))
                lockAccount()
                return;
            }
        }
        res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
    }
    res.send(msg.getMsgError("Those password didn't match. Try again."))
}

const validateOTPCtr = async (req, res) => {
    const result = await validateOTPvalue(req.body.requestId, req.body.pin)
    res.send(result)
}


module.exports = {
    insertCtr,
    getCtr,
    isPatientCtr,
    isEmailCtr,
    getBasicDataCtr,
    editCtr,
    checkPasswordCtr,
    // requestOTPCtr,
    validateOTPCtr,
    getPatientWithOTPCtr,
    requestOTPCtr,
    cancelRequestOTPCtr,

    forgotPasswordVerifyCtr,
    confirmChangePasswordCtr

};
