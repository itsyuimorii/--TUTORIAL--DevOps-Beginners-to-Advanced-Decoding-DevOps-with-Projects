const Tour = require('../models/tourModel');

// 2) ROUTE HANDLER
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  // res.status(200).json({
  //   status: 'success',
  // });
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();

  //Async function, return a Promise
  await Tour.create({}).then();

  res.status(201).json({
    status: 'success',
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
