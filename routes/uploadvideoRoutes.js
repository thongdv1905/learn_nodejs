var express = require('express');
var router = express.Router();
const uploadvideo = require('../config/uploadvideo');
// const modelProduct = require('../models/vkde\\');
const path = require('path');
const Video = require('../models/video');
/* GET users listing. */
router.get('/test', function (req, res, next) {
    res.send('respond with a upload');

});

router.post('/upload_video', uploadvideo.single('video'), async (req, res) => {
    try {
        const {file}= req
        // const urlImages= files.map((file)=>`${req.protocol}://${req.get('host')}/uploads/${file.filename}`)
        const urlImages= `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
        const model = new Video(req.body);
        model.image= urlImages
        const result = await model.save();// add data vao db
        if (result) {
            res.json({
                "status": 200,
                "message": "Them thanh cong",
                "data": result
            })
        } else {
            res.json({
                "status": 400,
                "message": "Them that bai",
                "data": []
            })
        }
        res.send(result);
        console.log('resultresultresultresult', result);
        res.send('respond with a resource');
    } catch (error) {

    }
})


module.exports = router;
// Route for handling video uploads
// app.post('/upload', upload.single('video'), async (req, res) => {
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
// });

// module.exports = router;