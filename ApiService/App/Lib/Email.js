const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'opdbooksblockchain@gmail.com', // generated ethereal user
        pass: 'Opdbooks147'// generated ethereal password
    }
});
module.exports = transporter