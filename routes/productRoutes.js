var express = require('express');
var router = express.Router();
const modelProduct = require('../models/products');
const Upload = require('../config/upload');
/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.render('index', { title: 'Node' });
  // res.sendFile('../')path.join(__dirname,'../','view',)
    // res.send
    // const 

});
//add
router.post('/add', Upload.single('image'),async(req,res) => {

    try {
        const {file}= req
        // const urlImages= files.map((file)=>`${req.protocol}://${req.get('host')}/uploads/${file.filename}`)
        const urlImages= `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
        const model = new modelProduct(req.body);
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
//get lisst
router.get('/list', async (req, res) => {
    const result = await modelProduct.find({})
    try {
        res.send(result)
        res.json({
            "error_code": 0,
            "message": "Succes",
            "data": result
        })
    } catch (error) {
        console.log(error);
    }
})
// // find user to id

router.post('/search', async (req, res) => {

    try {
        // Extract the product ID from the request body
        const { id } = req.body;

        // Find the product by ID
        const product = await modelProduct.findOne({ id: id });

        // Check if product exists
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Return the product as a response
        res.json(product);
    } catch (error) {
        console.error('Error searching for product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//edit user to id
router.patch('/edit/:id',async (req, res)=>{

  try{
    const result = await modelProduct.findByIdAndUpdate(req.params.id,req.body)
    if(result){
      const rs= await result.save()
      res.send(rs)
    }else{
      res.json({
        "status":400,
        "message": "Khong tim thay id",
        "data": []
      })
    }
  }catch(error){
    if(error.name=== 'CastError'){
      res.status(404).send('Invalid ID format')
    }else{
      console.log(error);
      res.status(500).send('Internal Server Error')
    }

  }
})

// //delete user
// router.delete('/delete/:id',async (req, res)=>{
//   try{
//     const result = await modelUser.findByIdAndUpdate(req.params.id,req.body)
//     if(result){
//       // const rs= await result.save()
//       res.json({
//         "status":200,
//         "message": "Xoa thanh cong",
//         "data": result
//       })
//     }else{
//       res.json({
//         "status":400,
//         "message": "xoa that bai",
//         "data": []
//       })
//     }
//   }catch(error){
//     console.log(error);

//   }
// })

module.exports = router;
