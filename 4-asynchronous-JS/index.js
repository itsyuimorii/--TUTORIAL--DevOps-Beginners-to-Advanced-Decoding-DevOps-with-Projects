const { resolveObjectURL } = require('buffer');
const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Could not find file 😢');
      resolve(data);
    });
  });
};

const writeFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, (err, data) => {
      if (err) reject('Could not write file 😢');
      resolve(data);
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed:${data}`);
    return superagent.get('https://dog.ceo/api/breed/${data}/images/random');
  })

  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img.txt', res.body.message);
    // fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //   if (err) return console.log(err.message);
    //   console.log('Random dog image saved to file');
    // });
  })
  .catch((err) => {
    console.log(err.message);
  });

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
