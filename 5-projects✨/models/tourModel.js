// eslint-disable-next-line import/no-extraneous-dependencies
const slugify = require('slugify');
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `A tour must have a name`],
      unique: true,
      trim: true,
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, `A tour must have a duration`],
    },
    maxGroupSize: {
      type: Number,
      required: [true, `A tour must have a max group size`],
    },
    difficulty: {
      type: String,
      required: [true, `A tour must have a difficulty`],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, `A tour must have a price`],
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
      required: [true, `A tour must have a description `],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, `A tour must have a coverImage`],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
  },
  {
    toJSON: { virtuals: true },
    toOBJECT: { virtuals: true },
  }
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

//DOCUMENT MIDDLEWARE : runs before .save() and .create() methods
tourSchema.pre('save', function (next) {
  // console.log(this);
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.pre('save', function (next) {
  console.log('Will save document...');
  next();
});

tourSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
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
