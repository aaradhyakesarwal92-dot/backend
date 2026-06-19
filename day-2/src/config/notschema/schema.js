const mongoose=require('mongoose')
const user=mongoose.Schema({
    name:String,
    email:String,
    password:String,

})

const usermodle=mongoose.model("aaru",user)


module.exports=usermodle