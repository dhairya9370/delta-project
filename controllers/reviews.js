const Listing= require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.create=async(req,res)=>{

    let listing =await Listing.findById(req.params.id);
    let review= new Review(req.body.review);
    review.author=req.user._id;
    await review.save();
    listing.reviews.push(review._id);
    await listing.save();
    req.flash("success","Review added successfully");
    res.redirect(`/listings/${req.params.id}`);
};
module.exports.delete=async(req,res)=>{
    let result = await Review.findByIdAndDelete(req.params.reviewId);
    await Listing.findByIdAndUpdate(req.params.id,{$pull:{reviews: req.params.reviewId}});
    req.flash("success","Your review was Deleted successfully");
    res.redirect(`/listings/${req.params.id}`)
};