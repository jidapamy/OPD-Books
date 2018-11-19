const nexmo = require("../Lib/Nexmo")
const transporter = require("../Lib/Email")
const handlebars = require('handlebars');
const CryptoJS = require("crypto-js");
const { convertString, bindData, unlockAccount, lockAccount, convertToAscii } = require('../Services/Utils')
const { contract, defaultAccount } = require('../Lib/Web3')
const { patientScheme } = require("../Models/PatientModel")

// OTP
const requestOTP = (phoneNumber) => new Promise((resolve, reject) => {
    // { status: '10', error_text: 'Concurrent verifications to the same number are not allowed'}
    nexmo.verify.request({ number: phoneNumber, brand: 'OPD Books' }, (err, result) => {
        if (err) reject({ message: 'Server Error' })
        if (result && result.status == '0') {
            resolve({ requestId: result.request_id })
            return
        }
        reject({ message: result, requestId: result.request_id })
    })
})

const validateOTP = (requestId, code) => new Promise((resolve, reject) => {
    // { status: '6', error_text: 'The Nexmo platform was unable to process this message for the following reason: Request \'de0868436bcc481991df0e036515a01b\' was not found or it has been verified already.'}
    // { status: '16', error_text: 'The code provided does not match the expected value' }
    // { status: '17', error_text: 'A wrong code was provided too many times. Workflow terminated'}
    nexmo.verify.check({ request_id: requestId, code }, (err, result) => {
        if (err) reject({ message: 'Server Error' })
        if (result && result.status == '0') {
            resolve({ message: 'Account verified! 🎉' })
            return
        }
        reject({ message: result, requestId: requestId })
    })
})

const cancelOTP = (requestId) => new Promise((resolve, reject) => {
    // { status: '6', error_text: 'The requestId \'01a218e770de499cb7b27b6dee3d144e\' does not exist or its no longer active.'}
    // { status: '10', error_text: 'Concurrent verifications to the same number are not allowed'}
    // { status: '19', error_text: 'Verification request [\'53c28372047c483f8e6e428d44093148\'] can\'t be cancelled within the first 30 seconds.'}
    // { status : "19",error_text: "Verification request  ['7e7563aa38704911b36a67f2cd5d3759'] can't be cancelled now. Too many attempts to re-deliver have already been made."}
    nexmo.verify.control({ request_id: requestId, cmd: 'cancel' }, (err, result) => {
        if (err) reject({ message: err })
        if (result && result.status == '0') {
            resolve({ message: 'cancel success!' })
            return
        } else {
            reject({ message: result })
        }
    });
})

const successfullyEmail = (data) => new Promise((resolve, reject) => {
    const html = require("../FormMail/MailWeb")
    var template = handlebars.compile(html(data));
    var replacements = {
        username: "OPD BOOKS"
    };
    var htmlToSend = template(replacements);
    let mailOptions = {
        from: '"OPDBOOKS" <opdbooksblockchain@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: 'Your medical record is saved successfully.', // Subject line
        text: 'Your medical record is saved successfully.!!', // plain text body
        html: htmlToSend // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject({ message: error })
            return
        }
        
        resolve({ message: 'send email success!' })
        return

    });
});

const sendEmail = async (data) => {
    try {
        const result = await successfullyEmail(data)
        return ({ status: true, message: "SUCCESS" })
    } catch (error) {
        throw new Error(error)
    }
}

const emailVerified = (data) => new Promise((resolve, reject) => {
    const html = require("../FormMail/EmailVerifycation")
    var template = handlebars.compile(html(data));
    var replacements = {
        username: "OPD BOOKS"
    };
    var htmlToSend = template(replacements);
    let mailOptions = {
        from: '"OPDBOOKS" <opdbooksblockchain@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: 'Email Verification - OPD Books ( Blockchain for patients )', // Subject line
        text: 'need to verify your email address. Please verify your email address to confirm your account registration', // plain text body
        html: htmlToSend // html body 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject({ message: error })
            return
        }
        
        resolve({ message: 'send email success!' })
        return

    });
});

const sendVerifyEmail = async (data) => {
    try {
        const result = await emailVerified(data)
        return ({ status: true, message: "SUCCESS" })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    requestOTP,
    validateOTP,
    cancelOTP,
    sendEmail,
    sendVerifyEmail,
    // verifiedEmail
};