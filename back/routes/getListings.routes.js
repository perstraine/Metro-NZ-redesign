const express = require("express");
const { getListings } = require("../controllers/getListings.controller");
const getListingsRouter = express.Router();

getListingsRouter.get("/search", getListings);

module.exports = { getListingsRouter };
