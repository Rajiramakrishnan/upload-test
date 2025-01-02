const { StudentModel } = require("../Model/student.model");
const bcrypt = require("bcrypt");
const { checkPass } = require("../utils/checkpass.js");
const { genToken } = require("../utils/genTocken.js");
const addstudent = async (req, res) => {
  try {
    console.log("body", req.body);
    let imgPath = req.file

    console.log('img path', imgPath)
    const { StudentName, AdmissionNo, Age } = req.body;
    const saltRound = 10;
    console.log(saltRound);
    console.log(StudentName);
    const hashedStudentName = await bcrypt.hash(StudentName, saltRound);

    console.log("hash", hashedStudentName);

    console.log('check',  imgPath.filename)
    const student = new StudentModel({
      StudentName: hashedStudentName,
      AdmissionNo,
      Age,
      studentImg: imgPath.filename
    });
    await student.save();
    return res.status(201).json({ mesage: "Student Record Added" });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error.message });
  }
};
const findStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    // console.log(studentId);
    const student = await StudentModel.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }
    return res.status(200).json({ message: "student found", data: student });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};

const findandupdate = async (req, res) => {
  try {
    const newAdmissionNo = req.body.newAdmissionNo;
    console.log(newAdmissionNo);
    const newAge = req.body.newAge;
    console.log(newAge);

    const studentId = req.params.id;
    console.log(studentId);
    const newStudent = await StudentModel.findByIdAndUpdate(
      studentId,
      { AdmissionNo: newAdmissionNo, Age: newAge },
      { new: true }
    );
    console.log(newStudent);
    if (!newStudent) {
      return res.status(404).json({ message: "student not found" });
    } else {
      return res
        .status(200)
        .json({ message: "student details updated", data: newStudent });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
const findanddelete = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);
    const delStudent = await StudentModel.findByIdAndDelete(studentId);
    console.log(delStudent);
    if (!delStudent) {
      return res.status(404).json({ message: "student not deleted" });
    } else {
      return res
        .status(200)
        .json({ message: "student deleted", data: delStudent });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const name = req.body.StudentName;
    const admno = req.body.AdmissionNo;
    const findstudent = await StudentModel.findOne({ AdmissionNo: admno });
    console.log(findstudent);

    if (!findstudent) {
      return res.status(404).json({ message: "Invalid admission number id" });
    }
    const issame = await checkPass(name, findstudent.StudentName);
    if (!issame) {
      return res.status(404).json({ message: "student not found" });
    }
    const obj = {
      id: findstudent._id,
      Name: findstudent.StudentName,
      premiumUser: true,
    };
    const token = genToken(obj);
    console.log(token);
    return res.status(200).json({ data: findstudent, token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error", error: err.message });
  }
};
module.exports = {
  addstudent,
  findStudent,
  findandupdate,
  findanddelete,
  login,
};
