
const mongoose = require('mongoose')
let Schema = mongoose.Schema
//ObjectId = mongoose.Types.ObjectId;

const citySchema = new mongoose.Schema({
    provinceId: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        require: true
    },
    CityName: String
})

const City = mongoose.model('City', citySchema);
module.exports = City;


// var MongoClient = require('mongodb').MongoClient;
//     var url = `mongodb+srv://mongoDbUser01:activedb@clustermosandbox-r534m.mongodb.net/MoDbSample01?retryWrites=true&w=majority`

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("MoDbSample01");
//         var myobj = [

//             { provinceId: { oid: '5f0590815b8fb51cb88b0f19' }, CityName: 'Vadodara' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f20' }, CityName: 'Sydeny' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f20' }, CityName: 'Newcastle' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1c' }, CityName: 'New York City' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1c' }, CityName: 'Buffalo' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1f' }, CityName: 'Torronto' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1f' }, CityName: 'Ottawa' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1e' }, CityName: 'Vancouver' },
//             { provinceId: { oid: '5f0590815b8fb51cb88b0f1e' }, CityName: 'Abbotsford' }

//         ];
//         dbo.collection('City').insertMany(myobj, function (err, res) {
//             if (err) throw err;
//             console.log('Number of documents inserted: ' + res.insertedCount);
//             db.close();
//         });
//     });