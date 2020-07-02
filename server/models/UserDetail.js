var mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    userID: {
        type: ObjectId,
        index: { unique: true }
    },
    firstName: String,
    lastName: String,
    occupation: String,
    address: String,
    cityId: ObjectId,
    pinCode: String,
    createdDate: {
        type: Date,
        default: new Date()
    },
    modifiedDate: Date
});

const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);
module.exports = UserDetails;