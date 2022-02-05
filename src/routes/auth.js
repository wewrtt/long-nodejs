const app=require('express');
const router= app.Router();
const authController=require('../app/cotrollers/AuthController');
router.get('/login',authController.login);
router.get('/logout',authController.logout);
router.post('/checkLogin',authController.checkLogin);
module.exports= router;
