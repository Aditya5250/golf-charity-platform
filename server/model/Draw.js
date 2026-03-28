import mongoose from "mongoose";

const drawSchema=new mongoose.Schema({
    numbers:[Number],
    month:Number,
    year:Number,
    status:{
        type:String,
        default:"published"
    }
}, 
{
    timestamps:true
})

const Draw = mongoose.model("Draw", drawSchema);

export default Draw;