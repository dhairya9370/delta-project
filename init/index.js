const mongoose= require("mongoose");
const data= require("./initialData.js");
const Listing= require("../models/listing.js");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}
main().then(()=>{
    console.log("MongoDB Connection Established");

})
.catch((err)=>{
    console.log(err);
});
const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(data.data);
}
initDB();
