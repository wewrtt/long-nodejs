const User =require('../model/Users');
class AuthController{
    login(req,res,next){
        res.render('./auth/login');
    }
    logout(req,res,next){
        res.clearCookie('userID');
        res.redirect('/auth/login');
    }
    async checkLogin(req,res,next){
        console.log(req.body) 
        res.json(req.body);
        return;
        var tk= req.body.tk;
        var mk= req.body.mk;
        var user= await User.findOne({tk:tk});
        if(!user){
            res.render('./auth/login',{errs:['ko tồn tại tài khoản'],values:req.body});
            return;
        }
        if(mk!== user.mk){
            res.render('./auth/login',{errs:['ko tồn tại tài khoản','hoặc mật khẩu  ko đúng']
            ,values:req.body});
            return;
        }
        res.cookie('userID',user.id,{signed:true})
        res.redirect('/')
    }
}

module.exports= new AuthController();