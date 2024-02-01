var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool')


// fetching images from here...
router.get('/getimg2k18', (req, res) => {
    //fetch data from 2k18
    pool.query("select * from album2k18", (error, result) => {
        if (error) {
            console.log(error)
            res.status(200).json({ status: false, data: '', 'message': 'server error' })
        }
        else {

            res.status(200).json({ status: true, data: result, 'message': 'fetched success' })

        }
    })
});

router.get('/getimg2k19', (req, res) => {
    pool.query("select * from album2k19", (error, result) => {

        if (error) {
            console.log(error)
            res.status(200).json({ status: true, data: [], 'message': 'server error' })
        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result, 'message': 'fetched success' })

        }

    })
});

router.get('/getimg2k20', (req, res) => {
    pool.query("select * from album2k20", (error, result) => {

        if (error) {
            console.log(error)
            res.render('galleryimages/gallery2020', { 'album2k20data': [], 'message': 'server error' })
        }
        else {
            console.log(result)
            res.render('galleryimages/gallery2020', { 'album2k20data': result, 'message': 'fetched success' })

        }

    })
});

router.get('/getimg2k21', (req, res) => {
    pool.query("select * from album2k21", (error, result) => {

        if (error) {
            console.log(error)
            res.render('galleryimages/gallery2021', { 'album2k21data': [], 'message': 'server error' })
        }
        else {
            console.log(result)
            res.render('galleryimages/gallery2021', { 'album2k21data': result, 'message': 'fetched success' })

        }

    })
});

router.get('/getimg2k22', (req, res) => {
    pool.query("select * from album2k22", (error, result) => {

        if (error) {
            console.log(error)
            res.render('galleryimages/gallery2022', { 'album2k22data': [], 'message': 'server error' })
        }
        else {
            console.log(result)
            res.render('galleryimages/gallery2022', { 'album2k22data': result, 'message': 'fetched success' })

        }

    })
});

router.get('/getimg2k23', (req, res) => {
    pool.query("select * from album2k23", (error, result) => {

        if (error) {
            console.log(error)
            res.render('galleryimages/gallery2023', { 'album2k23data': [], 'message': 'server error' })
        }
        else {
            console.log(result)
            res.render('galleryimages/gallery2023', { 'album2k23data': result, 'message': 'fetched success' })

        }

    })
});
// vilay image fetching from here...

router.get('/getvimg2k18', (req, res) => {
    //fetch data from 2k18
    pool.query("select * from valbum2k18", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2018', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2018', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getvimg2k19', (req, res) => {
    //fetch data from 2k19
    pool.query("select * from valbum2k19", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2019', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2019', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getvimg2k20', (req, res) => {
    //fetch data from 2k20
    pool.query("select * from valbum2k20", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2020', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2020', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getvimg2k21', (req, res) => {
    //fetch data from 2k21
    pool.query("select * from valbum2k21", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2021', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2021', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getvimg2k22', (req, res) => {
    //fetch data from 2k22
    pool.query("select * from valbum2k22", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2022', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2022', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getvimg2k23', (req, res) => {
    //fetch data from 2k23
    pool.query("select * from valbum2k23", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/vilaygallery2023', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/vilaygallery2023', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

// fetching ibdita images here...

router.get('/getiimg2k18', (req, res) => {
    //fetch data from 2k18
    pool.query("select * from ialbum2k18", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2018', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2018', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getiimg2k19', (req, res) => {
    //fetch data from 2k19
    pool.query("select * from ialbum2k19", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2019', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2019', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getiimg2k20', (req, res) => {
    //fetch data from 2k20
    pool.query("select * from ialbum2k20", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2020', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2020', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getiimg2k21', (req, res) => {
    //fetch data from 2k21
    pool.query("select * from ialbum2k21", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2021', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2021', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getiimg2k22', (req, res) => {
    //fetch data from 2k22
    pool.query("select * from ialbum2k22", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2022', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2022', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getiimg2k23', (req, res) => {
    //fetch data from 2k20
    pool.query("select * from ialbum2k23", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/ibtidagallery2023', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/ibtidagallery2023', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

// fetching adeiu image from here...

router.get('/getaimg2k18', (req, res) => {
    //fetch data from 2k18
    pool.query("select * from aalbum2k18", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2018', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2018', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});


router.get('/getaimg2k19', (req, res) => {
    //fetch data from 2k19
    pool.query("select * from aalbum2k19", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2019', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2019', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getaimg2k20', (req, res) => {
    //fetch data from 2k20
    pool.query("select * from aalbum2k20", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2020', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2020', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getaimg2k21', (req, res) => {
    //fetch data from 2k21
    pool.query("select * from aalbum2k21", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2021', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2021', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getaimg2k22', (req, res) => {
    //fetch data from 2k22
    pool.query("select * from aalbum2k22", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2022', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2022', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});

router.get('/getaimg2k23', (req, res) => {
    //fetch data from 2k23
    pool.query("select * from aalbum2k23", (error, result) => {
        if (error) {
            console.log(error)
            res.render('galleryimages/adeiugallery2023', { 'album2k18data': [], 'message': 'server error' })
        }
        else {

            res.render('galleryimages/adeiugallery2023', { 'album2k18data': result, 'message': 'fetched success' })

        }
    })
});


module.exports = router