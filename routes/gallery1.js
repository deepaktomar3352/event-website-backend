var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');


//  calling event gallery function
router.get('/gallery',function(req,res){
    pool.query("select * from eventsgallerypic",function(error,result){
        if(error)
        {
            console.log(error)
            res.status(200).json({data:'','message':'server error'})
        }
        else
        {
           
            res.status(200).json({status:true,data:result,'message':'fetched success'})
            
            // res.send(result)
        }
    
});
});
router.post('/upload', upload.array('files', 10), (req, res) => {
    const files = req.files;
    if (!files) {
        // console.log(error)
        res.status(200).json({'message':'server error'})
    }
  
    // insert file data into MySQL database
    pool.query('insert into eventsgallerypic (picture, picsize, picmime) VALUES ?', [files.map(file => [file.originalname, file.size, file.mimetype])], (error, result) => {
      if (error) {
        res.status(200).json({'message':'server error'})
      }
      console.log(result)
      res.status(200).json({data:result,message:"Record submitted successfully"})
    });
  });

  module.exports=router