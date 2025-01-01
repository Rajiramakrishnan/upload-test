const validatePhoneno=(req,res,next)=>{
    const {PhoneNo}=req.body;
    console.log(PhoneNo.length);
    
    try{
        if(PhoneNo.length<10){
            console.log("Phonenumber Validation:",PhoneNo);
            return res.status(400).json({message:"Phone number must contain 10 digits"})

            
        }
        next();
    }
    catch(err){
        return res.status(404).json({message:"Error on Phone number ",error:err.message})
    }

}
module.exports={validatePhoneno}
