
const mongoose=require('mongoose')
const user=mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,

})

const usermodle=mongoose.model("aaru",user)


module.exports=usermodle