const {TeacherModel}=require("../Model/teacher.model")
const bcrypt=require("bcrypt")
const addTeacher=async(req,res)=>{
    try{
        console.log("body:",req.body);
        const{TeacherName,Subject,Salary,PhoneNo}=req.body;
        const saltRound=10;
        console.log(Subject);
        const hashedSubject=await bcrypt.hash(Subject,saltRound)
        console.log(hashedSubject);
        const Teacher=new TeacherModel({TeacherName,Subject:hashedSubject,Salary,PhoneNo})
        await Teacher.save();
        return res.status(201).json({message:"Teacher Record Created"})
    }
    catch(error){
        return res.status(500).json({message:"server error"})
    }
    }

    const findTeacher=async(req,res)=>{
        try{
            const teacherId=req.params.id;
            console.log(teacherId);
            const teacher=await TeacherModel.findById(teacherId);
            if(!teacher){
                return res.status(404).json({message:"Teacher Not found"})
            }
            return res.status(200).json({message:"Teacher found",data:teacher})

        }
        catch (error) {
            return res.status(500).json({ message: "server error" });
          }
    }
    const findandupdate=async (req,res)=>{
        try{
            const newPhoneNo=req.body.newPhoneNo;
            console.log(newPhoneNo);
            const newSalary=req.body.newSalary;
            console.log(newSalary);
            const teacherId=req.params.id;
            console.log(teacherId);
            const newTeacher=await TeacherModel.findByIdAndUpdate(teacherId,{PhoneNo:newPhoneNo,Salary:newSalary},{new:true})
            console.log(newTeacher);
            if(!newTeacher){
                return res.status(404).json({message:"Teacher not found"})
            }
            else{
                return res.status(200).json({message:"Teacher details updated",data:newTeacher})
            }
            }
            catch(error){
                return res.status(500).json({message:"server error"})
              }   
    }
    const findanddelete=async(req,res)=>{

        try{
            const teacherId=req.params.id;
            console.log(teacherId);
            const delTeacher=await TeacherModel.findByIdAndDelete(teacherId);
            console.log(delTeacher);
            if(!delTeacher){
                return res.status(404).json({message:"teacher not deleted"})
            }
            else{
                return res.status(200).json({message:"teacher record deleted",data:delTeacher})
              }
        }
        catch(error){
            return res.status(500).json({message:"server error",error:error.message})
          } 
    }
    module.exports={addTeacher,findTeacher,findandupdate,findanddelete}