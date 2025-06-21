require("dotenv").config();
// console.log(process.env.NODE_ENV);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const mo= require("method-override");
const ejsMate= require("ejs-mate");
const myerr=require("./utils/ExpressErr.js");
const cors = require("cors");
const Listing= require("./models/listing.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/reviews.js");
const userRouter= require("./routes/user.js");
const session= require("express-session");
const MongoStore = require('connect-mongo');
const flash= require("connect-flash");
const User= require("./models/user.js");
const passport= require("passport");
const LocalStrategy=require("passport-local");



app.use(cors());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(mo("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
const atlas_url= process.env.ATLAS_DB_URL;
async function main(){
    await mongoose.connect(atlas_url);
}
main().then(()=>{
    console.log("MongoDB Connection Established");

})
.catch((err)=>{
    console.log(err);
});

const store= MongoStore.create({
    mongoUrl:atlas_url,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter:  24*3600,
});
store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE");
})
app.use(session({
    store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expiry: Date.now()+ 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currentUser=req.user;
    next();
});
app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);


// app.get("/home", async(req, res) => {
//     const allListings= await Listing.find({});
//     res.render("home.ejs",{allListings});
// });

app.all("/:x", (req, res, next) => {
    next(new myerr(404, "Page Not Found"));
});
app.use((err,req,res,next)=>{
    let{status=500,message="Something Went Wrong!!!"}=err;
    res.status(status).render("error.ejs",{status,message,name:err.name});
});

app.listen(2121,()=>{
 console.log("AirBnB on port 2121");
});