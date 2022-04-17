
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000

/** DB CONNECTION */
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(()=>{
  console.log("DB CONNECTED");
}).catch((err)=>{
  console.log(err);
})

app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
  })