const { MongoClient } = require("mongodb");

const getListings = async (req, res) => {
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
    const result = await client
      .db("mission6b")
      .collection("metroNZ")
      .find()
      .toArray();
    if (result) {
      res.send(result);
    } else {
      console.log(`no listings found`);
    }
  }
  main();
};

module.exports = { getListings };
