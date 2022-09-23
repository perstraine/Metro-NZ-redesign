const express = require("express");
const { searchListings } = require("../controllers/search.controller");
const searchRouter = express.Router();

searchRouter.post("/search/results", searchListings);

module.exports = { searchRouter };
