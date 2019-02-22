const mongoose = require('mongoose');
const config = require('config');

// const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });

const dbConfig = config.get('dbConfig');

// Connection to Mongoose
mongoose.connect(dbConfig.url);

module.exports = mongoose.connection;