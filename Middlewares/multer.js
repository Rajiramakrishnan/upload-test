// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/upload')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const uploadStudentImg = multer({ storage: storage })

  
//   module.exports = {
//     uploadStudentImg
//   }




const multer = require("multer")
const fs = require('fs');
const path = require('path')

const uploadDir = path.join(__dirname, "../upload");
console.log('dir', uploadDir)
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const uploadStudentImg = multer({ storage: storage })

  
  module.exports = {
    uploadStudentImg
  }
