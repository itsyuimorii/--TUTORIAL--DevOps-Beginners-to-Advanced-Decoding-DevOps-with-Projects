const express = require('express');
const fs = require('fs');

//Get an instance (object) of the server
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'itsyuimoriiTours' });
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    results: tours.length,
    data: {
      //   tours: tours,
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  // where all the parameters of all the variables that we define here are stored
  console.log(req.params);
  //when we multiply a string that looks like a number,when we multiply that with another number,it will then automatically convert that string to a number.
  const id = req.params.id * 1;

  //loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or false in each of the iterations
  const tour = tours.find((el) => el.id === id);

  //check if the id is not existing
  if (!tour) {
    return res.status(404).json({
      status: 'Not Found',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    //JSend data formations
    status: 'success',

    data: {
      //   tours: tours,
      tour: tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //the data from the body in the console, just to verify that it actually works, so req.body.
  //get data from the body in the console
  //console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  //create a new object by merging two existing objects
  const newTour = Object.assign({ id: newId }, req.body);
  //push this tour into the tour array
  tours.push(newTour);
  //persist that into file,using fs.writeFileSync
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
  //res.send('Done');
});

app.patch('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

//Start the server
const port = 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
