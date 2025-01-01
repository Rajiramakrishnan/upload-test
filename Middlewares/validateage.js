const validateage=(req,res,next)=>{
    const{Age}=req.body;
    try{
        if(Age>=18||Age<=3){
            console.log("age validation:",Age);
            
            return res.status(400).json({message:"Age must be between 3 to 17"})
        }
        next();
    }
    catch(err){
        return res.status(404).json({message:"Error on age ",error:err.message})
    }
    
}
module.exports={validateage}