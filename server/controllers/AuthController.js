var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var User = require('../models/User')

module.exports = {
    login: function(username, password, callback){
        User.findOne({ username: username }, function(err, user) {
            if(err){
                callback(err, null);
                return;
            }

            if(!user){
                //User not found
                callback(err, null);
            }else{
                user.comparePassword(password, function(err, isMatch) {
                    if(err){
                        callback(err, null);
                        return
                    }

                    if(isMatch){
                        var authToken = jwt.sign({ username: user.username, _id: user._id}, process.env.JWTSECRET);
                        callback(null, authToken);
                    }else{
                        callback(err, null);
                    }
                });
            };

        });
    },
    register: function(username, password, callback){        
        var newUser = new User({username,password});

        newUser.save(function(err, user) {
            if(err){
                callback(err, null);
                return;
            }              

            var authToken = jwt.sign({ username: user.username, _id: user._id}, process.env.JWTSECRET);
            callback(null, authToken);
        });
    }
}

// //middleware for checking for the presence of the Authorization token on secure routes.
// module.exports = (req, res, next) => {
//     if (!req.headers.authorization) {
//         return res.status(401).end();
//     }

//     const token = req.headers.authorization.split(' ')[1];

//     return jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {

//         if (err) { 
//             return res.status(401).end(); 
//         }

//         req.userData = {};
//         req.userData.tokenID  = token;
//         req.userData.userid = decoded._id;
//         req.userData.username = decoded.username;

//         return next();
//     });
// };
