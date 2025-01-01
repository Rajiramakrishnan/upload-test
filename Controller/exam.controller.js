const {ExamModel}=require("../Model/exam.model")
const addExam=async (req,res)=>{
    try{
        console.log("body",req.body);
        const {subject,marks,student,teacher}=req.body;
        const exam=new ExamModel({
            subject,marks,student,teacher
        })

        await exam.save();
        return res.status(201).json({message:"Exam record created"})
    }
    catch(error){
        return res.status(500).json({message:"server errore",error:error.message})
    }

    
}
const findExam=async (req,res)=>{
    try{
        const examId=req.params.id;
        console.log(examId);
        const exam=await ExamModel.findById(examId).populate("student").populate("teacher");
        console.log(exam);
        
        if(!exam){
            return res.status(200).json({message:"Exam record not found"})
        }
        return res.status(404).json({message:"exam record found",data:exam})
        
    }catch(error)
    {
        return res.status(500).json({message:"Internal server error"})
    }

}
module.exports={addExam,findExam}