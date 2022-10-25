const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("baza ulandi");
  })
  .catch((err) => {
    if (err) throw err;
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", require("./routes/users"));
app.listen(5000, () => {
  console.log("success fully server");
});
