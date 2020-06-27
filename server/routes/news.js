const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const News = require('../models/News')

{ //commented code
// const fakeNews = [{
//     id: '1',
//     title: '1: Mad owl chases car',
//     teaser: 'Mad owl seen tormenting drivers in Morecambe',
//     body: 'This is some body text regarding the news story of the mad owl tormenting drivers in Morecambe  SERVER'
// }, {
//     id: '2',
//     title: '2: Owl stowaway',
//     teaser: 'Despicable owl impersonates passenger to board flight to Luton',
//     body: 'This is some body text regarding the news story of the owl making its way onto a domestic flight to luton SERVER'
// }, {
//     id: '3',
//     title: '3: Owl steals pork pie',
//     teaser: 'This morning a rogue owl stole a pork pie from a shop in Swindon.',
//     body: 'This is some body text regarding the news story of the owl stealing a pork pie from a shop in swindon SERVER'
// }];

// router.get('/', function(req, res, next) {
//     res.status(200).send({
//       data: fakeNews
//     })
// })

// router.get('/:id', function(req, res, next){
//     const id = req.params.id

//     const picked = fakeNews.find(o => o.id === id);

//     res.status(200).send({
//         data: picked
//     })

// })

// // // router.route('/').get((req, res) => {
// // //     News.find()
// // //         .then(news => res.json(news))
// // //         .catch(err => res.status(400).json('Error: ' + err));
// // // });
}
router.get('/', function(req, res, next) {

    newsController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                in:'news.js (/)',
                error: err
            });
            return;
        }
        console.log('news.js (/)');
        res.json({
            success: 1,
            in:'news.js (/)',
            data: results
        });
    });
});


router.get('/:id', function(req, res, next){
    const id = req.params._id;
    console.log('news.js (/:id)'+ req.params._id);
    newsController.findById(id, function(err, result){
    
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                in:'news.js (/:id)',
                data: result
            });
            return;
        }
        
        res.status(200).json({
            success: 1,
            in:'news.js (/:id)',
            data: result
        });
    });
});

router.post('/', function(req, res, next) {
    newsController.create(req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

module.exports = router