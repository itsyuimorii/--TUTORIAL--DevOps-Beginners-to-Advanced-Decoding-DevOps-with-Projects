const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

//Get an instance (object) of the server
const app = express();

// 1) MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋 ');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toDateString();
  next();
});

// 2) ROUTE HANDLER
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
//3] ROUTES

//app.get('/api/v1/tours', getAllTours);
//app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//4] SERVER
const port = 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
