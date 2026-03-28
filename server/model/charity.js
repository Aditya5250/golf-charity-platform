import mongoose from "mongoose";

const charitySchema =new mongoose.Schema({
    name:String,
    description:String,
    image:String,
},
{
    timestamps:true
});


export default mongoose.model("charity", charitySchema);