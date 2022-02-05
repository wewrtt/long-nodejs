const User=require('../model/Users');
class AuthMiddleware{
    async auth(req,res,next){
        if(!req.signedCookies.userID){
            res.redirect('/auth/login');
            return;
        }
        var user= await User.findById({_id:req.signedCookies.userID});
        if(!user){
            res.redirect('/auth/login');
            return;
        }
        next();
        
        
    }
}
module.exports = new AuthMiddleware();