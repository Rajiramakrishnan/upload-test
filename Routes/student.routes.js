const express=require("express")
const StudentRouter=express.Router();
const{addstudent,findStudent,findandupdate,findanddelete,login}=require("../Controller/student.controller.js")
const{validateage}=require("../Middlewares/validateage.js");
const{validatePremium}=require("../Middlewares/validatePremium.js")
const { StudentModel } = require("../Model/student.model.js");
const {protectRoute}=require("../Middlewares/jswAuth.js")
const {uploadStudentImg} = require("../Middlewares/multer.js")
StudentRouter.get("/",(req,res)=>{
    return res.json({message:"It is a student Router"})
})
StudentRouter.post("/addstudent", uploadStudentImg.single("studentImg"), validateage,addstudent)
StudentRouter.get("/findstudent/:id",protectRoute,validatePremium,findStudent)
StudentRouter.patch("/findandupdate/:id",findandupdate)
StudentRouter.delete("/findanddelete/:id",findanddelete)
StudentRouter.post("/login",login)
module.exports=StudentRouter;