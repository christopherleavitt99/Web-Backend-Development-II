const express = require('express');
// const connectDB = require('./db/connect.js');
const app = express();
const mongodb = require('./db/connect');

// connectDB();
const port = process.env.PORT || 3000;

//app.listen(Port, () => console.log('Server started'));
app.use('/', require('./routes')).use(express.json()).use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }

});