const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { getListingsRouter } = require("./routes/getListings.routes");
const { searchRouter } = require("./routes/search.routes");
const { listingRouter } = require('./routes/listing.routes')
const PORT = 4000;

app.use(searchRouter);
app.use(getListingsRouter);
app.use(listingRouter)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
