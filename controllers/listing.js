const Listing= require("../models/listing");
module.exports.index= async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/listings.ejs",{allListings});
};
module.exports.renderNewForm=async(req,res)=>{
    res.render("listings/new.ejs");
};
module.exports.update=async(req,res)=>{
    const id = req.params.id;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let {filename,path}= req.file;
        listing.image = {
            url: path,
            filename: filename
        };
        await listing.save(); 
    }
    req.flash("success","Listing updated successfully");
    res.redirect(`/listings/${id}`);
};
module.exports.show=async(req,res)=>{
    const {id} = req.params;
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Listing Not Found !");
        res.redirect("/listings");
    }else{
        res.render("listings/show.ejs",{listing});
    }
};
module.exports.delete=async(req,res)=>{
    let status= await Listing.findByIdAndDelete(req.params.id);
    req.flash("success","Listing Was Deleted Successfully");
    res.redirect("/listings/");
};
module.exports.create=async(req,res,next)=>{
    const newListing= new Listing(req.body.listing);
    newListing.owner= req.user._id;

    //handling direct post requests to this route
    if(typeof(req.file) !== "undefined"){
        let {filename,path}=req.file;
        newListing.image = {
            url: path,
            filename: filename
        };
        let savedListing= await newListing.save();
        req.flash("success","New Listing Created Successfully");
        res.redirect(`/listings/${savedListing._id}`);
    }else{
        req.flash("error","Please upload a supported file");
        return next();
    }
};
module.exports.renderEditForm=async(req,res)=>{
    const id= req.params.id;
    const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Not Found !");
        res.redirect("/listings");
    }else{
        res.render("listings/edit.ejs",{listing});
    }
    
};
