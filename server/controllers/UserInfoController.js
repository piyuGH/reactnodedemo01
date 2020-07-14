
var UserDetails = require('../models/UserDetail');
var Province = require('../models/province');
var City = require('../models/City');

const { response } = require('express');

module.exports = {

    create: function (params, callback) {
        UserDetails.create(params, function (err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    },

    find: function (params, callback) {
        UserDetails.find(params, function (err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    },

    findProvince: function (params, callback) {
        Province.find(params, function (err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    },

    findCity: function (params, callback) {
        City.find({}, function (err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    },

    findById: function (id, result) {
        UserDetails.findById(id, function (err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    }
}
