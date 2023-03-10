const express = require('express');

const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

// router.param('id', (req, res, next, val) => {
//   //console.log(`Tour id is: ${val}`);
//   next();
// });

//Create a checkBody middleware

//Check if body contains the name and price properties
//if not, send back 404 (bad request)
//Add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.createTour)
  .delete(tourController.deleteTour);

module.exports = router;
