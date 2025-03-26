import express from "express";
import fetchEbay from "./src/service/fetch";
import scrap from "./src/scrap/scrap";
import {PORT_BACK} from "../config.js"

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // specify the frontend's URL
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // allow the methods you need
	res.header("Access-Control-Allow-Headers", "Content-Type"); // allow the headers you need

	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	next();
});

app.get("/ping", (_, res) => res.send("pong"));

app.get("/api/scrape", async (req, res) => {
	console.log("received request");
	try {
		const data = await fetchEbay(req.query.keyword);
		const info = scrap(data);
		res.status(200).send(info);
	} catch (error) {
		res.sendStatus(500);
		console.log(error);
	}
});

const port = PORT_BACK || 6464
app.listen( port , async () => {
	console.log("Backend running on port " + port);
});
