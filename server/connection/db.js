
require('dotenv').config()
const mongoose = require('mongoose');
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
const connectDB = async () => {
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

module.exports = connectDB;