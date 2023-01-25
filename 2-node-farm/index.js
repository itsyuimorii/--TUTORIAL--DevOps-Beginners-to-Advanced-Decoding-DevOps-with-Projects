const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
// const slugify = require('slugify');

//this is top level code that only executes once and only the asynchronous code will be executed every time and do not worry about the blocking
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

////////////////SERVER
const server = http.createServer((req, res) => {
  //console.log(req);
  const pathName = req.url;

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    //loop the dataObj, get data from JSON.parse
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    res.end(tempOverview);
    // res.end("This is the overview page👀");

    // Product page
  } else if (pathName === "/product") {
    res.end("This is the product page🥗");
    // API
  } else if (pathName === "/api") {
    //parse the JSON data into an array
    //notify browser sending back JSON to the browser, the file format is JSON
    res.writeHead(200, { "content-type": "application/json" });
    //res.end("This is the API page");
    res.end(data);
  } else {
    res.writeHead(404, {
      //the browser is expected to get HTML type
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000 http://127.0.0.1:8080");
});
