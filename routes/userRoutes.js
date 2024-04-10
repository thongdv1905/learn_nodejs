var express = require('express');
var router = express.Router();
const modelUser = require('../models/user');
/* GET users listing. */
router.get('/test', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('index', { title: 'USER' });

});
//add
router.post('/add', async (req, res) => {

  try {
    const model = new modelUser(req.body);
    const result = await model.save(); // add data vao db
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
//get lisst
router.get('/list', async (req, res) => {
  const result = await modelUser.find({})
  try {
    res.send(result)
  } catch (error) {
    console.log(error);
  }
})
// find user to id

router.get('/getbyid/:id', async (req, res) => {

  try {
    const result = await modelUser.findById(req.params.id)
    if (result) {
      res.send(result)
    } else {
      res.json({
        "status": 400,
        "message": "Khong tim thay id",
        "data": []
      })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send('Invalid ID format')
    } else {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }

  }
})

//edit user to id
router.patch('/edit/:id', async (req, res) => {

  try {
    const result = await modelUser.findByIdAndUpdate(req.params.id, req.body)
    if (result) {
      const rs = await result.save()
      res.send(rs)
    } else {
      res.json({
        "status": 400,
        "message": "Khong tim thay id",
        "data": []
      })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send('Invalid ID format')
    } else {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }

  }
})

//delete user
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await modelUser.findByIdAndUpdate(req.params.id, req.body)
    if (result) {
      // const rs= await result.save()
      res.json({
        "status": 200,
        "message": "Xoa thanh cong",
        "data": result
      })
    } else {
      res.json({
        "status": 400,
        "message": "xoa that bai",
        "data": []
      })
    }
  } catch (error) {
    console.log(error);

  }
})

module.exports = router;
