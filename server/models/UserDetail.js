
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
//uuid = require('uuid');

const UserDetailsSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: { unique: true }
    },
    firstName: String,
    lastName: String,
    occupation: String,
    address: String,
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'city',
        required: true
    },
    pinCode: String,
    createdDate: {
        type: Date,
        default: new Date()
    },
    modifiedDate: Date
});

const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);
module.exports = UserDetails;