import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subscription: {
        status: {
            type: String,
            default: false
        },
        type: {
            type: String // monthly / yearly
        }
    },
    charity: {
        charityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Charity"
        },
        percentage:{
            type:Number,
            default:10
        },
        scores:[
            {
                value:Number,
                date:Date
            }
        ]
    }
},
{timestamps : true }
);

const User = mongoose.model("User",userSchema);

export default User;