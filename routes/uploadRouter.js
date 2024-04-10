var express = require('express');
var router = express.Router();
const Upload = require('../config/upload');
/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('respond with a upload');

});

router.post('/mulUpload',Upload.array('image',5),async(req,res)=>{
    try{
        const {files}= req
        const urlImages= files.map((file)=>`${req.protocol}://${req.get('host')}/uploads/${file.filename}`)
        console.log(urlImages);

    }catch(error){
        console.log(error);
    }
})

// router.post('/upload_video', Upload.single('video'), async (req, res) => {
//     try {
//         const { title, description } = req.body;
//         const { filename, size, path: filePath } = req.file;

//         const newVideo = new Video({
//             title,
//             description,
//             fileName: filename,
//             fileSize: size,
//             filePath
//         });

//         const savedVideo = await newVideo.save();
//         res.status(201).json(savedVideo);

//     } catch (error) {
//         console.error('Error uploading video:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

module.exports= router;