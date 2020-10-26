const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to mongoDB"))
  .catch((error) => console.log(error));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./config/passport')(passport);

app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.listen(port, () => console.log(`Server is running on port ${port}`));
