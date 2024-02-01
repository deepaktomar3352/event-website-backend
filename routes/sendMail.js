const nodemailer = require("nodemailer");


const sendMail =async(email,mailSubject,content,otp)=>{
 try {
    const transport =await nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:"deepaktomarcse2020@gmail.com",
            pass:"osvtggutvzxlpfdq",
        }
    });

    // const otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions ={
        from:"deepaktomarcse2020@gmail.com",
        to:email,
        subject:mailSubject,
        html:content,
        text: `Your OTP code is ${otp}`
    }

    transport.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error)
        }
        else
        {
            console.log("Mail sent successfully!",info.response);
        }
    })
    
 } catch (error) {
    console.log(error.message);
 }
}

module.exports=sendMail