const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const StudentSchema = Schema(
  {
    StudentName: {
      required: true,
      type: String,
    },
    AdmissionNo: {
      required: true,
      type: Number,
    },
    Age: {
      required: true,
      type: Number,
    },
    studentImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const StudentModel = model("Student", StudentSchema);
module.exports = { StudentModel };
