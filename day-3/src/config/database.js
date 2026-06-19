const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const connectdb=()=>{
     mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
        console.log("database connected successfully");
     })
}
module.exports=connectdb