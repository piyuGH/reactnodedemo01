const express = require('express')
const router = express.Router();

const userController = require('../controllers/UserController');
const { json } = require('body-parser');

router.get('/', function (req, res) {
    userController.find(req.query, function (err, result) {
        if (err) {
            res.json({
                succces: 0,
                error: err
            })
            return
        }
        res.json({
            succces: 1,
            data: result
        })
    })
})


router.get('/:id', function (req, res) {
    userController.findById(id, function (err, result) {
        if (err) {
            res.json({
                succces: 0,
                error: err
            })
            return
        }
        res.json({
            succces: 1,
            data: result
        })
    })
})

module.exports = router;