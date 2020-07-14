const express = require('express');
const router = express.Router();

const CityController = require('../controllers/CityController');


router.get('/', function (req, res, next) {

    CityController.find(req.query, function (err, results) {
        if (err) {
            console.log(err);
            res.json({
                success: 0,
                in: 'news.js (/)',
                error: err
            });
            return;
        }
        console.log('news.js (/)');
        res.json({
            success: 1,
            in: 'news.js (/)',
            data: results
        });
    });
});

router.get('/:id', function (req, res, next) {

    const id = res.params.id;
    CityController.findById(id, function (err, result) {
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

    CityController.create(req.body, function (err, result) {
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

module.exports = router;