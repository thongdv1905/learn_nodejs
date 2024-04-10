const express = require('express');
const multer = require('multer');
const path = require('path');
// const Video = require('../models/video');



// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/videos/'); // Specify the directory where video files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the uploaded file with a timestamp and its original extension
  }
});
const upload = multer({ storage });
module.exports= upload