const { MongoClient } = require("mongodb");

const listing = async (req, res) => {
	const { houseId } = req.body;

	const uri = "mongodb+srv://teamCat:mission6b!@cluster0.tmoamld.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(uri);

	try {
		await client.connect();
		const result = await client
			.db("mission6b")
			.collection("metroNZ")
			.find({ houseId: `${houseId}` })
			.toArray();
		console.log(result);
		result.length === 0 ? res.send("failed") : res.send(result);
	} catch (e) {
		console.error(e);
		res.send("failed");
	} finally {
		await client.close();
	}
};

module.exports = { listing };
