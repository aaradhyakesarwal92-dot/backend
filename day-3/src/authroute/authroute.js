const express=require('expresss')
const autheroute=express.route()
const usermodle=require('../noteschema/schema')

autheroute.post('/register',async(req,res)=>{
    const{name,email,password}=req.body
    const checkemail=await usermodle.findOne({email})
    if(checkemail){
        return res.status(400).json({
          message:"email already exist"  
        })
    }
    const user=await usermodle.create({
     name,
     email,
     password
    })
    res,status(201).json({
        message:"note ban gya hai",
        data:user
    })

})

module.exports=autheroute