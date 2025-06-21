const mongoose= require("mongoose");
const Review= require("./review.js");
const listingSchema= new mongoose.Schema({
    title:String,
    description:String,
    location:String,
    price:Number,
    country:String,
    image:
    {   url:String,
        filename:String,
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing)
    {await Review.deleteMany({_id:{$in: listing.reviews}});}
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports= Listing;
