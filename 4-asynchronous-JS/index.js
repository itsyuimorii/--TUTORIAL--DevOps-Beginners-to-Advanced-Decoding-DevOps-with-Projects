const fs = require('fs');
const superagent = require('superagent');

//callback hell😤
/* fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get('https://dog.ceo/api/breed/${data}/images/random')
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);

      //write dog image file
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('random dog image saved to file');
      });
    });
}); */

//Promise
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get('https://dog.ceo/api/breed/${data}/images/random')
    .then((res) => {
      console.log(res.body.message);

      //write dog image file
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random dog image saved to file');
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
