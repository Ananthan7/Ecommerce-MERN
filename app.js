
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config()

const authRoutes = require("./routes/auth");

const app = express();

const port = process.env.PORT || 3000

/** Middlewares */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

app.use("/api", authRoutes)


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

/** starting a server */
app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
  })