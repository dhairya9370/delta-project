const User= require("../models/user.js");


module.exports.renderSignupForm= (req,res)=>{
 res.render("users/signup.ejs");
};
module.exports.registerUser =async(req,res)=>{
    let {username,email,password}=req.body.credentials;
    try{
        let newUser=new User({username,email});
        let registered= await User.register(newUser,password);
        req.login(registered,(err)=>{
            if(err){
               return next(err);
            }
            req.flash("success","Registered Successfully, Welcome To AirBnB !");
            res.redirect("/home");
        })
        
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
};
module.exports.renderLoginForm=async(req,res)=>{
    res.render("users/login.ejs");
};
module.exports.loginUser=async(req,res)=>{
    req.flash("success","Logged In Successfully");
    let redirectTo = res.locals.redirectUrl || "/home";
    res.redirect(redirectTo);
};
module.exports.logoutUser=async(req,res)=>{
    req.logout((err)=>{
        if(err){next(err);}
        else{
            req.flash("success","Logout Successfull");
            res.redirect("/home");
        }
    });
}