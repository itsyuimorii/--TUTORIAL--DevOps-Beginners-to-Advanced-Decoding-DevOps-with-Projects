const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

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

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `A tour must have a name`],
    unique: true,
  },
  rating: {
    type: String,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, `A tour must have a price`],
  },
});
const Tour = mongoose.model('Tour', tourSchema);

//only run one time
// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.7,
//   price: 497,
// });

// const testTour = new Tour({
//   name: 'The Park Camper ',
// });
//error💥: _message: 'Tour validation failed'

const testTour = new Tour({
  name: 'The Park Camper',
  rating: 4.9,
  price: 997,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log('ERROR💥:', err));

// console.log(app.get('env'));
// console.log(process.env);

// 4) START SERVER
const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
