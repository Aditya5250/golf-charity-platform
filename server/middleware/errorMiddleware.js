const errorMiddleware =(err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.statusCode || 500).json({messgae:err.messgae || "server Error"});
};
export default errorMiddleware