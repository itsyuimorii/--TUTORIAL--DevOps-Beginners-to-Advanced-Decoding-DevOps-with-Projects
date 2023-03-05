const fs = require("fs");
//Load http module
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
// const slugify = require('slugify');

/////////////////////////////////
// SERVER
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
// 如果请求访问的是 index.html 文件,那么我们就要读取 index.html 文件的内容
// 读取文件的内容,使用的方式 是 fs 模块
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

//创建服务器对象
const server = http.createServer((req, res) => {
  const pathName = req.url;
  // Overview page
  // 根据路径地址,读取文件内容,显示在页面中
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // This function is supposed to replace all placeholders in template argument being passed.

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    //console.log(cardsHtml);
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
    //res.end(tempOverview);
    //res.end("this is the overview page👀");

    // Product page
  } else if (pathName === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    // const product = dataObj[query.id];
    // const output = replaceTemplate(tempProduct, product);
    // res.end(output);

    res.end("this is the product page🥗");

    // API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });

    // 如果是读取成功,向页面输出,读取的文件内容
    // 也就是 HTML文件的代码内容
    // 代码内容,实际上是通过 node.js 搭建的服务器,交给浏览器来执行html文件的程序内容
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
