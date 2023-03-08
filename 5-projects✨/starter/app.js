const express = require('express');

//Get an instance (object) of the server
const app = express();

app.get('/', (req, res) => {
  res.end('welcome!');
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
