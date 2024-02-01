var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');
/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index');
});

router.get("/sponsordata", function (req, res) {
  res.render('sponsor', { message: "" });
})

router.post('/sponsorsubmit', upload.single('logo'), function (req, res, next) {
  pool.query("insert into sponsor( firstname, lastname, emailaddress, mobilenumber, company, comment, companylogo, category, submitedat, updatedate, updatedby)values(?,?,?,?,?,?,?,?,?,?,?)", [req.body.fname, req.body.lname, req.body.emailaddress, req.body.mobilenumber, req.body.companyname, req.body.comment, req.file.originalname, req.body.category, req.body.submitedat, req.body.updatedat, req.body.submitedby], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, message: 'Submited Succesfully' })
    }


  });
});



router.get('/showsponsor', function (req, res) {
  pool.query("select * from sponsor", function (error, result,) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result, message: 'Fetch Sponsor Succesfully' })

    }
  })
});


router.get('/showsponsorimg', function (req, res) {
  pool.query("select * from sponsor", function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result, message: 'Fetch Sponsor Succesfully' })
    }

  })

});

router.post('/sponsorupdate', function (req, res) {
  pool.query("update sponsor set firstname=?,lastname=?,emailaddress=?,mobilenumber=?,company=?,comment=?,category=?,updatedate=?,updatedby=? where sponsorid=? ", [req.body.fname, req.body.lname, req.body.emailaddress, req.body.mobilenumber, req.body.companyname, req.body.comment, req.body.category, req.body.updatedat, req.body.submitedby, req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " updated succesfully" })
    }
  })
});


router.post('/sponsorimgupdate', upload.single('logo'), function (req, res) {

  pool.query("update sponsor set companylogo=? where sponsorid=?", [req.body.originalname, req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
  })
});

router.post('/delete_sponsor_detail', (req, res) => {

  pool.query("delete from sponsor  where sponsorid=?", [req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " Deleted  succesfully" })
    }

  })


});


router.get("/title", function (req, res) {
  res.render('homeeventtitle', { message: "" });
});




router.post('/titlesubmit', function (req, res) {

  if (req.body.page == "home") {

    pool.query("insert into home (  titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)", [req.body.title, req.body.dt, req.body.submitedby, req.body.updatedby, req.body.submitedat, req.body.updatedat], function (error, result) {

      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: " server error" })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: " Submit succesfully" })
      }
    })
  }

  else if (req.body.page == "vilay") {

    pool.query("insert into vilay (  titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)", [req.body.title, req.body.dt, req.body.submitedby, req.body.updatedby, req.body.submitedat, req.body.updatedat], function (error, result) {


      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: " server error" })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: " Submit succesfully" })
      }
    })
  }
 else if (req.body.page == "technoparv") {

    pool.query("insert into technoparv ( titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)", [req.body.title, req.body.dt, req.body.submitedby, req.body.updatedby, req.body.submitedat, req.body.updatedat], function (error, result) {


      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: " server error" })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: " Submit succesfully" })
      }
    })
  }

});

router.get('/fetchtitle', function (req, res) {
  pool.query("SELECT * FROM home ORDER BY titleid DESC LIMIT 1", function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " succesfully" })
    }
  })
});

router.get('/fetchdata', function (req, res) {
  // fetch data from the title table
  pool.query('select * from title ORDER BY titleid DESC LIMIT 1', function (error, titleData) {
    if (error) {
      console.log(error)
      res.render('index', { titleData: [], sponsorData: [], message: "server error" })
    }
    else {
      // fetch data from the sponsor table
      pool.query('select * from sponsor', function (error, sponsorData) {
        if (error) {
          console.log(error)
          res.render('index', { titleData: [], sponsorData: [], message: "server error" })
        }
        else {
          // render the data to the client
          console.log(titleData)
          res.render('index', { titleData: titleData[0], sponsorData, message: "succesfully" })
        }
      });
    }
  });
});

router.get("/r", function (req, res) {
  res.render('registerpage', { message: "" });
});

router.get("/t", function (req, res) {
  res.render('technoparv', { message: "" });
});

module.exports = router;
