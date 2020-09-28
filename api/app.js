const express = require('express');
const app = express();
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
