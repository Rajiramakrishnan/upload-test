const mongoose=require("mongoose");
const {Schema,model}=mongoose;
const ExamSchema=Schema({
    subject:{
        required:true,
        type:String

    },
    marks:{
        required:true,
        type:Number
    },
    student:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"Student"
    },
    teacher:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"Teacher"

    },
},
{
    timestamps:true
})
const ExamModel=model("Exam",ExamSchema)
module.exports={ExamModel}