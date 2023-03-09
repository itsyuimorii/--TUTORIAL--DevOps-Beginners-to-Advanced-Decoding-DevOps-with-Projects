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

app.get('/api/v1/tours/:id', (req, res) => {
  // where all the parameters of all the variables that we define here are stored
  console.log(req.params);

  //So it'll basically loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or falsein each of the iterations, okay?Now what the find method will then dois that basically, it will create an arraywhich only contains the elementwhere this comparison here turns out to be true, all right?And in this situation, we want to find the elementwhere the ID is equal to the onethat we get from the parameters.And so by specifying this callback function herewith this comparison, we will ensurethat only the element where the ID is actually equalto the specified ID in the parameterswill get returned from the find methodand stored into tour, all right?

  const tour = tours.find((el) => el.id === req.params.id);

  res.status(200).json({
    //JSend data formations
    status: 'success',
    data: {
      //   tours: tours,
      tours,
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

//Start the server
const port = 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
