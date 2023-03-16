const Tour = require('../models/tourModel');
//alias middleware

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingAverage,price';
  req.query.fields = 'name,price,ratingAverage,summary,difficulty';
  next();
};

class APIFeatures {
  // two variables => the mongoose query and also the queryString
  //Now, again, I'm passing the query here because I do not want to query inside of this class because that would then bounce this class to the tour resource but, again,I want this to be as reusable as possible.
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //each of the functionality, starting with filter.
  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    // let query = Tour.find(JSON.parse(queryStr));
  }
}

// 2) ROUTE HANDLER
exports.getAllTours = async (req, res) => {
  //return all the documents in this collection
  try {
    //console.log(req.query);
    //query for all the documents,using find() method, it will return an array of all these documents,and will also very nicely convert them into JavaScript objects

    // 2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      // console.log(sortBy);
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 3) Field Limiting
    if (req.query.fields) {
      //get field from postman
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      //excluding this field
      query = query.select('-__v');
    }

    // 4) Pagination
    //convert string into number by "*1"
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    //define the skip value
    const skip = (page - 1) * limit;
    // page=3&limit=10 page1(1-10)  page2(11-20)  page3(21-30 )
    query = query.skip(skip).limit(limit);

    //for the situations that page=4&limit=3, not enough 4 pages that show 3 results, using 👇
    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip > numTours) throw new Error('this page does not exist');
    }
    //EXECUTE QUERY
    //create instance of APIfeatures, that will then get stored into Features.
    // we need to pass a query(create a query object Tour.find() and the queryString.
    //so this features will get API filtering functionality.
    const features = new APIFeatures(Tour.find(), req.query).filter();
    const tours = await features.query;

    /*  //second way to writing query

    const getAllTours = await Tour.find()
      .where('duration')
      .equal(5)
      .where('difficulty')
      .equal('easy'); */

    res.status(200).json({
      status: 'success',
      //result measures the number of results that are in the tours
      result: tours.length,
      //this data property here to envelope the tours.
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const getTour = await Tour.findById(req.params.id);
    //Tour.findOne({_id: req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        getTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: `fail`,
      message: err,
    });
  }
};

//create document with mongoose
exports.createTour = async (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();
  try {
    //Async function, return a Promise
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: `fail`,
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    //query the documents
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: `fail`,
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    //query the documents
    //So in this case, we actually don't save anything to any variable because remember, we actually don't send anything back to the client
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: `fail`,
      message: err,
    });
  }
};
