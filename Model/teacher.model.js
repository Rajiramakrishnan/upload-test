 
const mongoose=require("mongoose");

  const {Schema,model}=mongoose;
  const TeacherSchema=Schema({
    TeacherName:{
        required:true,
        type:String
    },
    Subject:{
        required:true,
        type:String
    },
    Salary:{
        required:true,
        type:Number
        
    },
    PhoneNo:{
        required:true,
        type:String,
        unique:true
    }
    
},
{
timeStamps:true
})
const TeacherModel=model("Teacher",TeacherSchema);
module.exports={TeacherModel}