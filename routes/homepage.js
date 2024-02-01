var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');

router.get('/fetchtitle', function (req, res) {
    pool.query('select * from title  ORDER BY titleid DESC LIMIT 1', function (error, result) {
  
        if (error) {
          console.log(error)
          res.render('index', { result: result, message: " succesfully" })
        }
        else {
            {
              console.log(result)
              res.render('index', {result: result, message: " succesfully" })
            }
        }
    })
  });

  module.exports = router;