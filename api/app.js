const express = require('express');
var mongoose = require("mongoose");
const morgan = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");

const uri = 'mongodb+srv://lauraNovoResume:Novoresume2020@challengenovo.echg3.mongodb.net/challengeNovoresume?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("err connection db:", err);
})

db.once('open', () => {
  console.log("db connection succeeded!")
})

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 9007

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})

/*

const AuthRoute = require("./src/routes/auth")

const connectDb = require("./src/connection");

const PORT = 9007;

app.get('/', (req, res) => {
    res.send('Hello from Novoresume !');
});

app.get("/users", (req, res) => {
  res.send("Get users \n");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});

app.use('/auth', AuthRoute) */
