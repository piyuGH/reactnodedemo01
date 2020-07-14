var User = require('../models/User');

module.exports = {

    find: function (params, callback) {
        User.find({}, function (err, result) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, result)
        })
    },

    findById: function (id, callback) {
        User.findById(id, function (err, result) {
            if (err) {
                callback(err, null)
                return
            }
            callback(result, null)
        })
    }
}