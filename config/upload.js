const multer = require('multer');
const _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

// const storage_video = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/videos/'); // Specify the directory where video files will be stored
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname)); // Rename the uploaded file with a timestamp and its original extension
//     }
//   });

// const _upload = multer({ storage_video });

const upload = multer({
    storage: _storage,
    limits:{
        fieldSize:5*1024*1024
    }
})
module.exports= upload