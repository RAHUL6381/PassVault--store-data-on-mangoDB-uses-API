import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Password_mgn";
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

await client.connect();
const db = client.db(dbName);
// get passwords
app.get("/", async (req, res) => {
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});
//save passwords
app.post("/", async (req, res) => {
  const password = req.body;
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
  // console.log(req.body);
});
//delete passwords

app.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const collection = db.collection("passwords");

  const result = await collection.deleteOne({ id });

  res.send({ success: true, result });
});

app.listen(port, () => {
  console.log(
    `WORKING------------------------------> http://localhost:${port}  <-------------------------------`
  );
});
