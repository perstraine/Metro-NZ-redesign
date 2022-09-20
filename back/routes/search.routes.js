const express = require("express");
const {
  main,
  findOneListingByName,
  findListings,
} = require("../controllers/search.controller");
const searchRouter = express.Router();

// searchRouter.get("/search/results", main, findOneListingByName);
searchRouter.post("/search/results", findListings);

module.exports = { searchRouter };
