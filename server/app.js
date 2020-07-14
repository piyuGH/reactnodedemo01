
const express = require('express'); // the library we will use to handle requests. import it here
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { options } = require('./routes/index');
const connectDB = require('./connection/db');
//routes
const routes = require('./routes/index');
const newsRoute = require('./routes/news');
var authRoute = require('./routes/auth');
var userInfoRoute = require('./routes/userInfo');
var cityRouter = require('./routes/city');
var usersRouter=require('./routes/users');

let app = express(); // instantiate express

//database connection
//connectDB.connectDB();
require('./connection/dbConnect');

//connectDB.getData("city", callback);


app.use(cors()); // allow Cross-domain requests 
app.options('*', cors()); // allow Cross-domain requests 

//middleware  
//app.use(express.json());
app.use(bodyParser.json()); // When someone sends something to the server, we can recieve it in JSON format
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', routes);
app.use('/user', authRoute);
app.use('/news', newsRoute);
app.use('/userInfo', userInfoRoute);
app.use('/city', cityRouter);
app.use('/users',usersRouter);


// // base route. Responds to GET requests to the root route ('/')
// app.get("/", (req, res) => {
//     res.send("Home sweet home 🏚") // always responds with the string "TODO"
//   });

//   // base route. Responds to POST requests to the root route
//   app.post("/", (req, res) => {
//     res.send("Sending it through the post 📬") // always responds with the string "TODO"
//   });

//   // Responds to PUT requests to the root route
//   app.put("/", (req, res) => {
//     res.send("Don't you dare put me up to this.") // always responds with the string "TODO"
//   });

const PORT = process.env.PORT || 5000;
var listener = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

