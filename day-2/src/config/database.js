const mongoose=require('mongoose')
const connectdb=(()=>{
    mongoose.connect('mongodb://localhost:27017/mydb"')
    .then(()=>{
        console.log("database connect successfully")
    })



})
module.exports=connectdb






