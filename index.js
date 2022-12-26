const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const uri = "mongodb+srv://mzncvmc:1234@boilerplate.nwwwnqa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('MongoDB Connected...');

  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.send('Hello nodemon !!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/register', (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err});
        return res.status(200).json({
            success: true
        });
    });
});