const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;


const uri = "mongodb+srv://mzncvmc:1234@boilerplate.nwwwnqa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('MongoDB Connected...');

  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.send('Hello Mongo !!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
