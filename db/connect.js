const dotenv = require('dotenv');
dotenv.config();
const URI = "mongodb+srv://dbUser:dbUserPassword@cluster0.ipzyavp.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async()=>{
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

const MongoClient = require('mongodb').MongoClient;
let _db;
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};
module.exports = { initDb, getDb };