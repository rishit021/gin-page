const express = require("express");
const {MongoClient} = require('mongodb');

const app = express();

const PORT = 8080;

let db = "mongodb+srv://rishit021:rishit%40%23@iogin-sign.vaxsha1.mongodb.net/?retryWrites=true&w=majority";

async function main(){
  
  const client = new MongoClient(db);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};






app.use(express.static("public"));
app.use(express.json());

app.post("/sucsess", (req, res) => {
  res.json(req.body);
  res.end();
});

app.listen(PORT, () => {
  console.log("server started" + PORT);
});
