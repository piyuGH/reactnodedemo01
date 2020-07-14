"javascript"

require('dotenv').config()
const mongoose = require("mongoose");

// .env file
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

//const dbURI =  `mongodb://${DB_USER}:${DB_PASS}@cluster0-shard-00-00-gibou.mongodb.net:27017,cluster0-shard-00-01-gibou.mongodb.net:27017,cluster0-shard-00-02-gibou.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
const dbURI = `mongodb+srv://${DB_USER}:${DB_PASS}@clustermosandbox-r534m.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

// require any models

require("../models/City");