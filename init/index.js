const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/JetSetGo');

 
}
const initDB = async()=>{
    await Listing.deleteMany({});
   initData.data =  initData.data.map((obj)=>({...obj, owner:"6801e0128614c382a5d11428"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();