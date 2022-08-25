const express = require("express");
const cors = require('cors');
const connection = require("./Config/conn");
const UserController = require("./Routes/AutenticationRoutes/user.route");
require('dotenv').config()
const TaskController  = require('./Routes/AppRoutes/Task.route');
const ProjectController = require('./Routes/AppRoutes/Project.route');




const app = express();
app.use(cors())
app.use(express.json());

app.use("/user", UserController)


app.use('/project',ProjectController);
app.use('/project', TaskController);






app.listen(process.env.PORT, async()=>{
    await connection;
    console.log(`listening to port ${process.env.PORT}`);
})
