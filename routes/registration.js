var express = require('express');
var router = express.Router();
var upload = require('./multer')
const bodyParser = require('body-parser');
var pool = require('./pool')
const randomstring = require('randomstring');
const sendMail = require("./sendMail")
const sendMessageMail = require("./sendMessageMail")
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

router.get('/reg', (req, res) => {
  console.log(req.body)
  res.render('studentregister')
})

router.post('/registration', (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(req.body)

  pool.query('insert into student_registration (studentname, gender, fathername, emailaddress, mobilenumber, college, enrollment, course, year, password, confirmpassword,isverification) values(?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.studentName, req.body.gender, req.body.fatherName, req.body.emailAddress, req.body.mobileNumber, req.body.college, req.body.enrollment, req.body.course, req.body.year, req.body.password, req.body.confirmPassword,req.body.isverified], (error, result) => {
    if (error) {
      console.log(error)
      res.status(200).json({ status: false, message: 'server error...' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, otp: otp, data: result, message: 'successfully...',email:req.body.emailAddress });

      console.log("OTP", otp)
      let mailSubject = 'Mail Verification';
      // const randomToken = randomstring.generate();
      let content = `<p>Hi <b> ${req.body.studentName }</b>, \
          Please  Verify Your Mail.\
          Your OTP for one time password is <h3> ${otp} </h3>`;
      sendMail(req.body.emailAddress, mailSubject, content, otp);


      // pool.query('update student_registration set token=? where emailaddress=?', [randomToken, req.body.emailAddress], (err, results) => {
      //   if (err) {
      //     console.log("Token set Error", err)
      //   }

      // })
    }
  })
})

router.post("/verify-user",(req,res)=>{
  console.log("Verify user email",req.body)
  pool.query('update student_registration set isverification=? where emailaddress=? ', [req.body.verified, req.body.emailaddress], (err, results)=>{
    if(err)
    {
      console.log(err)
      res.status(200).json({status:false,message:'server Error'})
    }
    else
    {
      res.status(200).json({status:true,message:'Verify successfully!..'})
    }
  })
})

router.use(bodyParser.json());

router.post('/send-mail', (req, res) => {
  console.log("Body", req.body)

  pool.query('SELECT emailaddress FROM student_registration', (error, results, fields) => {

    if (error) throw error;

    const emails = results.map(result => result.emailaddress);
    let subject = req.body.sub;
    let heading = req.body.head;
    let msg = req.body.message;
    sendMessageMail(emails, subject, heading, msg)
  });
  res.status(200).json({ status: true, message: 'Message Sent Successfuly!...', });
});


router.post("/chkreg", (req, res) => {
  console.log(req.body.emailaddress)
  console.log(req.body.password)
  pool.query("select * from student_registration where (emailaddress=?) and password=?", [req.body.emailaddress, req.body.password], (error, result) => {
    if (error) {
      console.log(error)
      res.status(200).json({ status: false, message: 'server error' })
    }
    else {
      if (result.length == 0) {
        console.log(result)
        res.status(200).json({ status: false, message: 'Invalid emailadress/mobilenumber/password' })
      }
      else {
        console.log("RES", result)
        res.status(200).json({ status: true, data: result[0], message: 'success' })
      }
    }
  })
});


module.exports = router