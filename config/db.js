const mongoose = require("mongoose");


const connectDb=async()=>{
    try {
       var  MONGO_URL="mongodb+srv://abdulanas0000:Mongo3439@cluster0.iz4x6bl.mongodb.net/"
        await mongoose.connect(MONGO_URL).then(()=>{
            console.log("Db connected");
        })
    } catch (error) {
        console.log(error)
    }
   
    
}

module.exports=connectDb