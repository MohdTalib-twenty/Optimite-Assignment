const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title :{
        type :String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    status:{
        type:String,
        default:"In Progress"
    },
    createdAt :{
        type : Date,
        default : Date.now()
    },
    dueDate:{
        type:Date,
        require:true
    }

},{
    timestamps : true
})

module.exports= new mongoose.model("Task",taskSchema)