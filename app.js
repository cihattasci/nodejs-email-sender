var nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
});

let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL2,
    subject: 'First E-mail with using node.js',
    text: 'Also first text :)',
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email was sent successfully: ' + info.response);
    }
});