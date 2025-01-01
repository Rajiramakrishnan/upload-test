const express = require("express");

const app = express();
const port = 3000;

const StudentRouter = require("./Routes/student.routes.js");
const TeacherRouter = require("./Routes/teacher.routes.js");
const ExamRouter = require("./Routes/exam.routes.js");
const connectDB = require("./Db/connectDB.js");
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.use(express.static(`${__dirname}/upload`))

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/student", StudentRouter);   
app.use("/teacher", TeacherRouter);
app.use("/exam", ExamRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
