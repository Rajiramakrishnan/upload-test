const express=require("express")
const TeacherRouter=express.Router();
const{addTeacher,findTeacher, findandupdate,findanddelete}=require("../Controller/teacher.controller.js")
const {validatePhoneno}=require("../Middlewares/validatephoneno.js")
TeacherRouter.get("/",(req,res)=>{
    res.json({message:"It is A Teacher Router"})
})
TeacherRouter.post("/addteacher",validatePhoneno,addTeacher)
TeacherRouter.get("/findteacher/:id",findTeacher)
TeacherRouter.patch("/findandupdate/:id",findandupdate)
TeacherRouter.delete("/findanddelete/:id",findanddelete)
module.exports=TeacherRouter;