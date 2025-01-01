const express=require("express")
const ExamRouter=express.Router();
const {addExam,findExam}=require("../Controller/exam.controller.js")
ExamRouter.get("/",(req,res)=>{
    return res.json({message:"It is a Exam Router"})
})
ExamRouter.post("/addexam",addExam);
ExamRouter.get("/findexam/:id",findExam);
module.exports=ExamRouter;
