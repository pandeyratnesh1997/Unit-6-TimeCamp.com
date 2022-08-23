const express = require("express");
const cors = require('cors');
const connection = require("./Config/conn");
require('dotenv').config()



const app = express();
app.use(cors())
app.use(express.json());






app.listen(process.env.PORT, async()=>{
    await connection;
    console.log(`listening to port ${process.env.PORT}`);
})
