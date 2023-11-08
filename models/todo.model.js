import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
},{timestamps:true})

const Task=mongoose.model('Task',todoSchema)

export default Task