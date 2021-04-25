const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'francogm98@hotmail.com',
        pass: 'Vencomoeres98'
    }
})

function mailOptions (form){
    const mailOptions = {
        from: 'francogm98@hotmail.com',
        to: 'francogm98@hotmail.com',
        subject: form.asunto,
        text:`[${form.email}]:
    
        ${form.mensaje}`
    }
    return mailOptions;
}

router.post("/contacto",(req,res)=>{

    const {email,asunto,mensaje} = req.body;
    const form = {
        email,
        asunto,
        mensaje
    }
      
    let errors = false;
    if(!email || !asunto || !mensaje){
        errors = true;
    }
    if(errors){
        res.redirect("contactoError");
    }else{
        console.log(email);
        console.log(asunto);
        console.log(mensaje);
        transporter.sendMail(mailOptions(form), function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }

});

module.exports = router;




