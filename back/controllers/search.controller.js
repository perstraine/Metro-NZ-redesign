const { MongoClient } = require("mongodb");

const findListings = async (req, res) => {
  const {
    suburb,
    propertyType,
    bedrooms,
    bathrooms,
    minRent,
    maxRent,
    pets,
    availableNow,
  } = req.body;

  console.log(req.body);
  async function main() {
    const uri =
      "mongodb+srv://teamCat:mission6b!@cluster0.tmoamld.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      await search(client);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  async function search(client) {
    console.log(bedrooms);
    const result = await client
      .db("mission6b")
      .collection("metroNZ")
      .find({
        "address.suburb": suburb,
        // "property type": propertyType,
        // bathrooms: { $gt: bathrooms },
        // bathrooms: bathrooms,
        // price.: { $gt: minRent, $lt: maxRent },
        "price.$numberDecimal": { $lt: maxRent },
        // pets: pets,
        // bedrooms: bedrooms,
        // bedrooms: 3,
        pets: true,
      })
      .toArray();
    if (result) {
      res.send(result);
      console.log(result);
    } else {
      console.log(`no listings found`);
    }
  }
  main();
};

module.exports = { findListings };
