const express = require('express');
const connectDB = require('./DB/Conneection');
const app = express();
const mongodb = require('./db/connect');

connectDB();
const port = process.env.PORT || 3000;

app.listen(Port, () => console.log('Server started'));
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});