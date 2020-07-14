
require('dotenv').config()
const mongoose = require('mongoose');
var assert = require('assert');
const { json } = require('body-parser');

// .env file
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const MongoClient = require("mongodb").MongoClient;

//const dbURL = process.env.MONGO_DB_URL
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to database'));

//-----------------
var database, collection;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASS}@clustermosandbox-r534m.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
exports.connectDB = async () => {
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function (err, client) {
        if (err) {
            console.log('Error connecting to: ' + dbURL)
        }
        else {
            //console.log("connected...!")
            console.log('Connected to: ' + dbURL)

            // //getting records
            // //database = client.database(DB_NAME);
            // collection = client.collection("News");
            // console.log("Connected to `" + DB_NAME + "`!");
            // collection.find().forEach(function (myDoc) { console.log("user: " + myDoc.title); });
        }
    });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

exports.getData = async function (req, res) {
    console.log('in getData ' + req)
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, async function (err, db) {
        assert.equal(null, err);
        //getting records            
        collection = await db.collection(req);

        collection.find().forEach(function (myDoc) { console.log(myDoc._id + " : " + myDoc.CityName); });

        if (err) {
            console.log(err);
            return res.json({
                success: 0,
                error: err
            });
        
        }
        //callback(null, collection);
        //res.json(JSON.stringify(collection));
        res.status(200).json({
            success: 1,
            in:'db.js',
            data: collection
        });

    });
}

//module.exports = connectDB;

