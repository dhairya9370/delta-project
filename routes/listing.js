const express= require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing= require("../models/listing.js");
const myerr=require("../utils/ExpressErr.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const { isLoggedIn, isOwner } = require("../authenticateMiddleware.js");
const listingController= require("../controllers/listing.js");
const validateSchema=(req,res,next)=>{
    // if (typeof req.body.listing?.image === "string") {
    //   delete req.body.listing.image;
    // }
    // console.dir(req.body.listing);
    let result = listingSchema.validate(req.body);
    if(result.error){
        // console.log(result.error);
        let errMsg= result.error.details.map((el)=>el.message).join(", ");
        throw new myerr(400,errMsg);
    }else{
        next();
    }
};
const multer  = require('multer');
const {storage} =require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single("listing[image]"),validateSchema,wrapAsync(listingController.create));

router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateSchema,wrapAsync(listingController.update))
.get(wrapAsync(listingController.show))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.delete));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;