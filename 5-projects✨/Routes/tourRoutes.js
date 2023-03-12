const express = require('express');

const tourController = require('../controllers/tourController');

const router = express.Router();

/* use this .param function here to define parameter middleware in your own applications  */
// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.createTour)
  .delete(tourController.deleteTour);

module.exports = router;
