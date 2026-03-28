import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import scoreRoutes from "./routes/scoreRoutes.js"
import drawRoutes from "./routes/drawRoutes.js"
import charityRoutes from "./routes/charityRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import errorMiddleware from "./middleware/errorMiddleware.js"
import connectDB from './config/db.js';
dotenv.config();

const PORT= process.env.PORT || 5000;

//connect to database
connectDB();

const app = express();

//Middleware
app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(express.urlencoded({extended:false}))
app.use(express.json());


//health check
app.get("/",(req,res)=>{
    res.send("API is working......")
})

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/scores",scoreRoutes);
app.use("/api/draw",drawRoutes);
app.use("/api/charities",charityRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/users",userRoutes);

//Error Middleware
app.use(errorMiddleware);

// Listen on server only if database is connected

mongoose.connection.once("open",()=>{
    console.log("connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`);
    })
    mongoose.connection.on("error",err=>{
        console.log(err);
    })
})
