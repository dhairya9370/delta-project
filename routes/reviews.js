const express= require("express");
const router = express.Router({mergeParams:true});
const wrapAsync= require("../utils/wrapAsync.js");
const myerr=require("../utils/ExpressErr.js");
const Listing= require("../models/listing.js");
const Review = require("../models/review.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const { isLoggedIn, isReviewAuthor } = require("../authenticateMiddleware.js");
const validateReview=(req,res,next)=>{
    let result = reviewSchema.validate(req.body);
    if(result.error){
        // console.log(result.error);
        let errMsg= result.error.details.map((el)=>el.message).join(", ");
        throw new myerr(400,errMsg);
    }else{
        next();
    }
};
const reviewController= require("../controllers/reviews.js");

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.create));
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.delete));

module.exports=router;
