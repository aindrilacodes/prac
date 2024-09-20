const express=require('express')
const app=express();
const colors=require('colors')
const morgan = require('morgan')
const router=require('./router/auth-router')
const connectDb=require('./utils/db')
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth',router)


connectDb().then(()=>{
    app.listen(8000,()=>{
        console.log(colors.bgCyan.black("server started"))
    })
})
