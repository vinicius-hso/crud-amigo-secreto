const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '0e9525c2fee4a08f2088231f10908e7a-24e2ac64-156eb76e',
        domain: 'sandboxe87fc72335f14a7595ad91a5bf4ae0a9.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendEmail = (email, text, cb) => {
    const mailOptions = {
        from: 'viniciushso@icloud.com',
        to: email,
        subject: 'Amigo Secreto',
        text: text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendEmail;