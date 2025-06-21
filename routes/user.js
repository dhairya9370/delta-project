const express= require("express");
const router = express.Router();
const {userSchema} =require("../schema.js");
const myerr=require("../utils/ExpressErr.js");
const wrapAsync= require("../utils/wrapAsync.js");
const validateUserSchema=(req,res,next)=>{
    let result = userSchema.validate(req.body);
    if(result.error){
        // console.log(result.error);
        let errMsg= result.error.details.map((el)=>el.message).join(", ");
        throw new myerr(400,errMsg);
    }else{
        next();
    }
};
const passport= require("passport");
const User= require("../models/user.js");
const {saveRerdirectUrl}=require("../authenticateMiddleware.js");
const userController= require("../controllers/user.js");


router.route("/signup")
.get(userController.renderSignupForm)
.post(validateUserSchema,wrapAsync(userController.registerUser));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRerdirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.loginUser);

router.get("/logout",userController.logoutUser);
module.exports=router;