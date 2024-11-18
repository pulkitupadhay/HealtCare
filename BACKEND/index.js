const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const route=require('./Routes/AuthRouter');
require('dotenv').config();
require('./Models/db');
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("server started at 8080");
})
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',route);