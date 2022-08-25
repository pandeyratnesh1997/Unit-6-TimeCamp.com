const express = require("express");
const cors = require('cors');
const connection = require("./Config/conn");
const UserController = require("./Routes/AutenticationRoutes/user.route");
require('dotenv').config()



const app = express();
app.use(cors())
app.use(express.json());

app.use("/user", UserController)






app.listen(process.env.PORT, async()=>{
    await connection;
    console.log(`listening to port ${process.env.PORT}`);
})
