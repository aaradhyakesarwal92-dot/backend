const express=require('express')
const app=express()
const connectdb=require('./config/database')
connectdb()
app.use(express.json())

const usermodle=require('./config/notschema/schema')



app.post('/notedata',async(req,res)=>{
    const {name,email,password}=req.body
   const user=await usermodle.create({

        name,email,password


    })
    res.status(201).json({
        message:"data create successfully",
        data:user

    })
})
app.get('/notedata',async(req,res)=>{
    const user=await usermodle.find()
    res.status(200).json({
       message:"note fetch successfully",
       data:user
    })
})

app.delete('/notedata/:id',async(req,res)=>{
    const user= await usermodle.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message:"note delete successfully",
        data:user
    })
})

app.patch('/notedata/:id',async(req,res)=>{
    const user=await usermodle.findbyIDANDupdate(req.params.id)
    res.status(200).json({
        message:" note update successfully",
        data: user
    })

    

})






module.exports=app