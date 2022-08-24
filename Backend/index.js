const app = express();
const express = require("express");
const cors = require('cors');
const connection = require("./Config/conn");
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')


const app = express();
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running..")
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.get("/api/notes/:id",(req,res)=>{
    res.json(notes);
});

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id === req.params.id);
    res.send(note);
});

app.use('/api/users', userRoutes)

app.use(express.json());

const PORT = process.env.PORT || 5000;
 

   
  

app.listen(process.env.PORT, async()=>{
    await connection;
    console.log(`listening to port ${process.env.PORT}`);
})