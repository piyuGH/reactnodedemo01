
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const newsRoute = require('./routes/news');
const { options } = require('./routes/index');
const connectDB = require('./connection/db');
var authRoute = require('./routes/auth');

let app = express();

//database connection
connectDB();

app.use(cors());
app.options('*', cors());

//middleware 
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', routes);
app.use('/user', authRoute);
app.use('/news', newsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

