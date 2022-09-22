const { MongoClient } = require("mongodb");

const findListings = async (req, res) => {
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
		res.send(result);
	} catch (e) {
		console.error(e);
		res.send("failed");
	} finally {
		await client.close();
	}
};

const getAllListings = async (req, res) => {
	const { houseId } = req.body;

	const uri = "mongodb+srv://teamCat:mission6b!@cluster0.tmoamld.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(uri);

	try {
		await client.connect();
		const result = await client.db("mission6b").collection("metroNZ").find({}).toArray();

		console.log(result);
		res.send(result);
	} catch (e) {
		console.error(e);
		res.send("failed");
	} finally {
		await client.close();
	}
};

module.exports = { findListings, getAllListings };
