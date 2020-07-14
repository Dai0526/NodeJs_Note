"use strict";
const nodemailer = require("nodemailer")

// create reusable transporter object using the default SMTP transport
// find info in node_modukes/lib/well-known/services.json
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'tianhuaf0526@gmail.com', // generated ethereal user
        pass: 'jmxtkxeayszyuibx', // generated ethereal password
    },
})

// send mail with defined transport object
let mailInfo = {
    from: '"tianhuaf0526" <ftianhuaf0526@gmail.com>', // sender address
    to: "tianhuaf0526@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world. Your validation code is 112358", // plain text body
    html: "<b>Hello world?</b>", // html body
}

// async function, use call back to get status
transporter.sendMail(mailInfo, (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
