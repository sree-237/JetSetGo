const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//index and create route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));
//New Route
  router.get("/new",isLoggedIn,listingController.rendernewForm);
//show,delete and update
router
.route("/:id")
.get(wrapAsync(listingController.showLisitings))
.put(isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync( listingController.updateistings))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditFrom));

module.exports = router;