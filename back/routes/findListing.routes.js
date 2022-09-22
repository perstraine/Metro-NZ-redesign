const express = require("express");
const { findListings, getAllListings } = require("../controllers/findListing.controller");
const findListingRouter = express.Router();

findListingRouter.post("/third-party", findListings);
findListingRouter.post("/get-listing", getAllListings);

module.exports = { findListingRouter };
