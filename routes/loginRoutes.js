var express = require('express');
var router = express.Router();
const modelUser = require('../models/user');
const JWT = require('jsonwebtoken');

const SECRECT_KEY = "THONGDV"
// const Upload = require('../config/upload');
/* GET users listing. */
router.get('/test', function (req, res, next) {
    res.render('index', { title: 'USER' });

});

router.post('/check_login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await modelUser.findOne({ username, password });
        console.log(user);
        if (user) {
            const token = JWT.sign({ id: user.id }, SECRECT_KEY, { expiresIn: '1h' });
            const refreshtoken = JWT.sign({ id: user.id }, SECRECT_KEY, { expiresIn: '1d' });
            console.log(token);
            console.log(refreshtoken);
            res.json({
                "error_code": 0,
                "message": "Đăng nhập thành công",
                "data": user,
                "token": token,
                "refreshToken": refreshtoken
            })
        } else {
            res.json({
                "error_code": 1,
                "message": "Đăng nhập thất bại",
                "data": []
            })
        }
    } catch (error) {
        console.log(error);
    }

});
module.exports = router;