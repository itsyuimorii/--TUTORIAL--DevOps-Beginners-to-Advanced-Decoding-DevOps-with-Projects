const mongoose = require('mongoose');

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

/*  
const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.7,
  price: 497,
});

const testTour = new Tour({
  name: 'The Park Camper ',
});
error💥: _message: 'Tour validation failed'

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
  .catch((err) => console.log('ERROR💥:', err)); */

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
