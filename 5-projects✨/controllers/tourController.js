const Tour = require('../models/tourModel');

// 2) ROUTE HANDLER
exports.getAllTours = async (req, res) => {
  //return all the documents in this collection
  try {
    //query for all the documents,using find() method, it will return an array of all these documents,and will also very nicely convert them into JavaScript objects
    const queryObj = { ...req.query };
    const excludeFileds = ['page', 'sort', 'limit', 'fields'];
    excludeFileds.forEach((el) => delete queryObj[el]);

    console.log(req.query, queryObj, excludeFileds);
    const getAllTours = await Tour.find(req.query);

    res.status(200).json({
      status: 'success',
      //result measures the number of results that are in the tours
      result: getAllTours.length,
      //this data property here to envelope the tours.
      data: {
        tours: getAllTours,
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
