module.exports.isLoggedIn= (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        req.session.redirectToUrl= req.originalUrl;
        req.flash("error","Need to login first");
        res.redirect("/login");
    }
}
module.exports.saveRerdirectUrl=(req,res,next)=>{
    if(req.session.redirectToUrl){
    res.locals.redirectUrl=req.session.redirectToUrl;
    }
    next();
}
const Listing= require("./models/listing.js");

module.exports.isOwner=async(req,res,next)=>{
    const id = req.params.id;
    let listing = await Listing.findById(id);
    if(res.locals.currentUser && !listing.owner._id.equals(res.locals.currentUser._id)){
        req.flash("error","Access Denied");
        return res.redirect(`/listings/${id}`)
    }
    next();
}

const Review= require("./models/review.js");
module.exports.isReviewAuthor=async(req,res,next)=>{
    const {reviewId,id} = req.params;
    let review = await Review.findById(reviewId);
    if(res.locals.currentUser && !review.author.equals(res.locals.currentUser._id)){
        req.flash("error","Cannot Delete Review,Access Denied");
        return res.redirect(`/listings/${id}`);
    }
    next();
}