const express=require('express')
const app=express()
const connectdb=require('./config/database')
connectdb()
// app.use(express.json())

// const usermodle=require('./config/notschema/schema')
// const autheroute=require('./authroute/auth.route')
// app.use('/api,authroute')









module.exports=app

