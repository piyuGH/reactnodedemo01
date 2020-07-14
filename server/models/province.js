const mongoose = require('mongoose');

const ProvinceSchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true
    },
    provinceName: {
        type: String,
        required: true
    }
})

const Province = mongoose.model('Province', ProvinceSchema);
module.exports = Province;

// var MongoClient = require('mongodb').MongoClient;        
//         var url = `mongodb+srv://mongoDbUser01:activedb@clustermosandbox-r534m.mongodb.net/MoDbSample01?retryWrites=true&w=majority`

//         MongoClient.connect(url, function (err, db) {
//             if (err) throw err;
//             var dbo = db.db("mydb");
//             var myobj = [
//                 { countryName: 'INDIA', ProvinceName: 'Gujarat' },
//                 { countryName: 'INDIA', ProvinceName: 'Maharstra' },
//                 { countryName: 'US', ProvinceName: 'California' },
//                 { countryName: 'US', ProvinceName: 'New York' },
//                 { countryName: 'US', ProvinceName: 'Taxas' },
//                 { countryName: 'CANADA', ProvinceName: 'British Columbia' },
//                 { countryName: 'CANADA', ProvinceName: 'Ontario' },
//                 { countryName: 'Austrila', ProvinceName: 'New South Wails' },
//                 { countryName: 'Austrila', ProvinceName: 'Darwin' },
//             ];
//             dbo.collection('Province').insertMany(myobj, function (err, res) {
//                 if (err) throw err;
//                 console.log('Number of documents inserted: ' + res.insertedCount);
//                 db.close();
//             });
//         });