const express = require("express");
const { listing } = require("../controllers/listing.controller")
const listingRouter = express.Router();

listingRouter.post('/listing', listing)

module.exports = { listingRouter };