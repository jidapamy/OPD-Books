const nexmo = require("../Lib/Nexmo")
const transporter = require("../Lib/Email")

// OTP
const requestOTP = (phoneNumber) => new Promise((resolve, reject) => {
    // { status: '10', error_text: 'Concurrent verifications to the same number are not allowed'}
    nexmo.verify.request({ number: phoneNumber, brand: 'OPD Books' }, (err, result) => {
        if (err) reject({ message: 'Server Error' })
        console.log("requestOTP", result);
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
        console.log("validateOTP", result);
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
        console.log("CENCEL!!!!", result)
        if (result && result.status == '0') {
            resolve({ message: 'cancel success!' })
            return
        } else {
            reject({ message: result })
        }
    });
})


//Email 

const createEmail = (email) => new Promise((resolve, reject) => {
    let mailOptions = {
        from: '"Fred Foo 👻" <opdbooksblockchain@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Your medical record is saved successfully.', // Subject line
        text: 'Your medical record is saved successfully.!!', // plain text body
        html: "<b>successfully!!</b> <a href='www.opdbooks.tk'>OPD Books</a>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject({ message: err })
            return
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        resolve({ message: 'send email success!' })
        return

    });
});

const sendEmail = async(email) => {
    try {
        const result = await createEmail(email)
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
};