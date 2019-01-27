const express = require('express');
const nodemailer = require('nodemailer');
const ProductModel = require('./../models/productModel')
const logger = require('./../libs/loggerLib')
const check = require('./../libs/checkLib')
const response = require('./../libs/responseLib')


let sendMail = (req,res) => {
   
    let stri = JSON.parse(Object.keys(req.body)[0])
    let name = stri.name
    let mobileNumber = stri.phone
    let emailId = stri.email
    let message = stri.message
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        console.log(name)
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let account = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
               // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'awzing.help@gmail.com', // sender address
            to: "abhishek.omex@gmail.com,avinash.kumar520@gmail.com", // list of receivers
            subject: "Contact-Us", // Subject line
            text: name + ' ' +  'wants to contact you with mobilenumber: ' + mobileNumber +  
            'and email: ' + emailId + 'with message: ' + message
        };
        console.log(mailOptions)
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)

        //console.log("Message sent: %s", info.messageId);
        res.send(Object.keys(req.body)[0])
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

}


module.exports = {
    sendMail: sendMail
}