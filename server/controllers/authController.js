import User from "../model/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


const register = async (req,res) => {
    try{
        // getting hold of name , password and email
        const {name,email,password} =req.body;


        //if user already exists
        const exixtingUser = await User.findOne({email});
        if(exixtingUser){
            return res.status(400).json({message:"User already exists"});
        }

        // hash the password

        const hashedPassword =await bcrypt.hash(password,10);

        // create user in the database
        const user = User.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(200).json({message:"User Registered Successfully",user});
    }
    catch(error){
        res.status(500).json({message:"server error"});
    }
};

const login =async (req,res)=>{
    try{
        // getting hold of email and password entered by client

        const {email,password} =req.body;

        // check user does not exist in database
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        // compare the password if user exists
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        // if password matches we generate token

        const token =jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}

        );

        res.json({
            message:"Login successfull",
            token,
            user
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server error"});
    }
}

export {register, login};