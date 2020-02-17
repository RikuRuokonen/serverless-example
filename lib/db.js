const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect(`${process.env.DB}`,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Succesfully connected to database!');
    }
  });