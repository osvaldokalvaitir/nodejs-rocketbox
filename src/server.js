const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://usuario:usuario123@cluster0-2vq7f.mongodb.net/rocketbox?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);
