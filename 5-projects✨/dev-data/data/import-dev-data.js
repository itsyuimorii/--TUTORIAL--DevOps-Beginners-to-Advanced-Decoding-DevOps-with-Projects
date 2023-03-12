const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successful!');
    // console.log(con.connection);
  });

//READ JSON FILE
//parse json file into javascript object
const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

//IMPORT JSON DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
  } catch (error) {
    console.log(error);
  }
};
