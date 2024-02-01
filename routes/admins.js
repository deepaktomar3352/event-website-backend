var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


router.get("/adminlogin",(req,res)=>{
    res.render('adminlogin',{message:''})
});

router.get("/adminlogout",(req,res)=>{
    localStorage.clear()
    res.render('adminlogin',{message:''})
});

router.get('/admindash',(req,res)=>{
 pool.query('select * from adminlogin where adminid=?',[req.query.adminid],(error,result)=>{
    if(error)
    {
        res.render('adminprofile',{message:'query error'})
    }
    else{
        res.render('adminpage',{result:result[0]})
    }
 })   
    
})


router.post("/chkadminlogin",(req,res)=>{
    console.log(req.body.emailaddress)
    console.log(req.body.password)
    pool.query("select * from adminlogin where (emailid=? or mobilenumber=?) and password=?",[req.body.emailaddress,req.body.emailaddress,req.body.password],(error,result)=>{
        if(error)
    {
      res.status(200).json({status:false,message:'server error'})
    }
    else
    {
      if(result.length==0)
      {
        res.status(200).json({status:false,message:'Invalid emailadress/mobilenumber/password'})
      }
      else
      {
        res.status(200).json({status:true,data:result[0],message:'success'})
      }
    }
    })
});

router.get("/profile",(req,res)=>{
    pool.query("select * from adminlogin where adminid=?",[req.query.adminid],(error,result)=>{
        if(error)
        {
            console.log(error)
            res.render('adminpage',{message:'server error'})
        }
        else
        {
            
            console.log(result)
            res.render('adminprofile',{result:result[0],message:'success'})

        }
    })
   
})



module.exports = router