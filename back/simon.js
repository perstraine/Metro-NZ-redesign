const { MongoClient } = require("mongodb");
const express = require("express");

async function main() {
	const uri = "mongodb+srv://teamCat:mission6b!@cluster0.tmoamld.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(uri);

	try {
		await client.connect();

		await findImage(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}
main().catch(console.error);

async function findImage(client) {
	const result = await client.db("mission6b").collection("metroNZ").find({ houseId: "04" });

	if (result) {
		console.log(`found image`);
		console.log(result);
	} else {
		console.log(`nothing found`);
	}
}