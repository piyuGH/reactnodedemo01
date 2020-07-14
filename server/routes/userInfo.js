
const express = require('express');
const router = express.Router();

const userInfoController = require('../controllers/UserInfoController');
var json = [];

//  '/userInfo'

{ // commented code
    // const db = require('../connection/db');
    // 

    // router.get('/:cities', async function (req, res) {
    //     console.log('in cities')
    //     // db.getData('city', function (err, result) {
    //     //     if (err) {
    //     //         res.json({
    //     //             success: 0,
    //     //             error: err
    //     //         });
    //     //         return
    //     //     }
    //     //     json.city = result;
    //     // });

    //     // try {
    //     //     json = await db.getData('city', res);
    //     // }
    //     // catch (err) {
    //     //     console.log(err);
    //     //     return res.json({
    //     //         success: 0,
    //     //         error: err
    //     //     });
    //     // }

    //     console.log('userinfo:got city list ')
    //     if (json) {

    //         return res.json({
    //             success: 1,
    //             data: json
    //         })
    //     }
    // })
}

router.get('/', function (req, res, next) {

    userInfoController.find(req.query, function (err, result) {
        if (err) {
            res.status(500).json({
                success: 0,
                error: err
            });
            return
        }
        // //CITY DATA
        // db.getData('city', function (err, result) {
        //     if (result) {
        //         json.city = result;
        //     }
        // });
        //USER DATA
        console.log(req.query);
        json.userInfo = result;
        // RETURN 
        res.status(200).json({
            success: 1,
            data: result
        });
    })
});

router.get('/province', function (req, res, next) {
    userInfoController.findProvince(req, function (err, result) {
        if (err) {
            res.status(200).json({
                success: 0,
                error: err

            })
            return
        }
        res.json({
            success: 1,
            data: result
        })
    });
});

router.get('/city', function (req, res, next) {

    //res.json('you did it');
    console.log('userInfo:(/:cities)')

    // collection.find().forEach(function (myDoc) { console.log(myDoc._id + " : " + myDoc.CityName); });

    // CityList.find({}).then(eachOne => {
    //     console.log('record found')
    //     res.json(eachOne);
    // })

    userInfoController.findCity(req, function (err, result) {
        if (err) {
            res.status(500).json({
                success: 0,
                error: err
            })
            return
        }
        res.status(200).json({
            success: 1,
            data: result
        })
    })
});

router.get('/users', function (req, res) {
    userInfoController.findUser(req, function (err, result) {
        if (err) {
            res.status(500).json({
                success: 0,
                error: err
            })
            return
        }
        res.status(200).json({
            success: 1,
            data: result
        })
    })
})

router.get('/:id', function (req, res, next) {

    const id = res.params.id;
    userInfoController.findById(id, function (err, result) {
        if (err) {
            res.status(500).json({
                success: 0,
                error: err
            })
            return
        }
        res.status(200).json({
            success: 1,
            data: result
        });
    });
});

// insert user
router.post('/', function (req, res, next) {

    userInfoController.create(req.body, function (err, result) {
        if (err) {
            res.status(200).json({
                success: 0,
                error: err
            })
            return
        }
        res.json({
            success: 1,
            data: result
        });
    });
});



// insert provience
router.post('/province', function (req, res, next) {

    userInfoController.saveProvience(req, function (err, result) {
        if (err) {
            res.status(200).json({
                success: 0,
                error: err
            })
            return
        }
        res.json({
            success: 1,
            data: result
        })
    })
})


module.exports = router