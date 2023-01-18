# ⛺️ Bootcamp ブートキャンプ 2023 => Node.js, Express, MangoDB

- [⛺️ Bootcamp ブートキャンプ 2023 =\> Node.js, Express, MangoDB](#️-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)
  - [🚀Section 00: Set\_up](#section-00-set_up)
        - [VSCode setup](#vscode-setup)
  - [🚀 Section 01: Welcome](#-section-01-welcome)
  - [🚀Section 02: Introduction to Node.js and NPM](#section-02-introduction-to-nodejs-and-npm)

# 🚀Section 00: Set_up

##### [VSCode setup](https://github.com/jonasschmedtmann/complete-node-bootcamp/blob/master/vscode-setup.md)

[Course Material and FAQ](https://github.com/jonasschmedtmann/complete-node-bootcamp)

# 🚀 Section 01: Welcome

**[⬆ back to top](#-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)**

# 🚀Section 02: Introduction to Node.js and NPM

**[⬆ back to top](#️-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)**

### [#](https://www.geeksforgeeks.org/node-js-file-system/?ref=lbp)Node.js File System

> Synchronous=>blocking
>
> - **Synchronous approach:** They are called **blocking functions** as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands.

```javascript
const fs = require("fs");
//通过 内置模块加载对象,来调用 模块的功能

//Blocking code executed synchronously
//同期的に実行されるブロック化コード
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
const textOutput = `This is: ${textInput}.\n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written to /txt/output.txt");
```

> Asynchronous => non-blocking
>
> - **Asynchronous approach:** They are called **non-blocking functions** as it never waits for each operation to complete, rather it executes all operations in the first go itself. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.

```javascript
//non-blocking code executed
fs.readFileSync("./txt/input.txt", "utf-8");
```

> Callback hell
> SOLUTION: Using Promises or Async/Await [Optional Section]

```javascript
//Non-blocking code executed asynchronously
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  //console.log(data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("will read from /txt/start.txt");
```

```js
const fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
```

- 参数1: 需要读取文件的路径,一般是从当前外部js文件开始的相对路径
- 参数2: 编码格式, utf-8 
          在cmd中执行,如果 utf-8 显示是 乱码 可以试试 gbk 
          但是实际项目不会在cmd中显示,都是在浏览器中运行,必须要设定为utf-8
- 参数3: 读取结束,执行的回调函数
          回调函数的参数1,报错信息,读取成功时,是 null    
          回调函数的参数2,数据信息,读取失败时,是 undefined  

### [#](https://www.geeksforgeeks.org/node-js-fs-readfile-method/?ref=lbp)Node.js`fs.readFile() `Method

**Syntax:** 

```
fs.readFile( filename, encoding, callback_function )
```

**Parameters:** The method accept three parameters as mentioned above and described below: 

- **filename:** It holds the name of the file to read or the entire path if stored at other location.

- **encoding:** It holds the encoding of file. Its default value is **‘utf8’**.

- callback_function:

  It is a callback function that is called after reading of file. It takes two parameters:

  - **err:** If any error occurred.
  - **data:** Contents of the file.

```js
const fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
```

- 参数1: 需要读取文件的路径,一般是从当前外部js文件开始的相对路径
- 参数2: 编码格式, utf-8         在cmd中执行,如果 utf-8 显示是 乱码 可以试试 gbk         但是实际项目不会在cmd中显示,都是在浏览器中运行,必须要设定为utf-8
- 参数3: 读取结束,执行的回调函数        回调函数的参数1,报错信息,读取成功时,是 null            回调函数的参数2,数据信息,读取失败时,是 undefined  

### #Node.js`fs.writeFile` Method

**Writing to a File:** This method will overwrite the file if the file already exists. The fs.writeFile() method is used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the functionality of the method. **Syntax:**

```js
fs.writeFile(path, data, options, callback)
```

**Parameters:**

- **path:** It is a string, Buffer, URL, or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similarly to fs.write() method.

- **data:** It is a string, Buffer, TypedArray, or DataView that will be written to the file.

- options:

   

  It is a string or object that can be used to specify optional parameters that will affect the output. It has three optional parameters:

  - **encoding:** It is a string value that specifies the encoding of the file. The default value is ‘utf8’.
  - **mode:** It is an integer value that specifies the file mode. The default value is 0o666.
  - **flag:** It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.

- callback: 

  It is the function that would be called when the method is executed.

  - **err:** It is an error that would be thrown if the operation fails.

**Example:** Let us create a js file named **main.js** having the following code: 

```js
var fs = require("fs");

console.log("writing into existing file");
fs.writeFile('input.txt', 'Geeks For Geeks', function(err) {
if (err) {
	return console.error(err);
}
	
console.log("Data written successfully!");
console.log("Let's read newly written data");
	
fs.readFile('input.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Asynchronous read: " + data.toString());
});
});

```

### [#](https://www.geeksforgeeks.org/node-js-http-module/?ref=lbp)Node.js HTTP module 

To make HTTP requests in Node.js, there is a built-in module **HTTP** in Node.js to transfer data over the HTTP. To use the HTTP server in node, we need to require the HTTP module. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

**Syntax:**

```
var http = require('http');
```

We can create a HTTP server with the help of **http.createServer()** method.

```javascript
// 1,加载 http模块,生成http模块对象
const http = require('http');

// 加载fs模块,读取写入文件内容
const fs = require('fs');

// 2,使用 http 模块功能,创建一个本地的服务器

// 2-1,创建服务器对象
const server = http.createServer(function(req,res){
    // 根据路径地址,读取文件内容,显示在页面中
    if(req.url === '/index.html'){
        // 如果请求访问的是 index.html 文件
        // 那么我们就要读取 index.html 文件的内容
        // 读取文件的内容,使用的方式 是 fs 模块
        fs.readFile('./index.html' , 'utf-8' , function(err,data){
            // 如果路径正确,读取成功 err 应该是 null
            // 如果不是null,证明读取错误,要报错
            if(err !== null){
                return console.log(err);
            }

            // 如果是读取成功,向页面输出,读取的文件内容
            // 也就是 HTML文件的代码内容
            // 代码内容,实际上是通过 node.js 搭建的服务器,交给浏览器来执行html文件的程序内容

            res.end(data);
        })
    }

    // 如果是其他地址,执行其他的判断,读取相应路径的文件,显示文件内容
    if(req.url === '/cart.html'){
        // 根据请求的地址,访问相应的路径下的文件
        fs.readFile('./cart.html' , 'utf-8' , function(err,data){
            // 如果读取文件有误,输出错误信息
            if(err !== null){
                return console.log(err);
            }
            // 如果读取正确,返回相应的响应体
            res.end(data);
        })
    }
});

// 2-2,设定服务器的监听端口
server.listen(8080 , function(){
    console.log('监听端口成功');
})
```

> 通过 node.js 的 内置fs模块 和 内置 http 模块,搭建一个简易的本地

```javascript

     1,加载 http 和 fs 内置模块
       const http = require('http');
       const fs = require('fs');

     2,创建服务器对象
       const server = http.createServer(函数)

     3,设定服务器的监听端口
       server.listen('端口',function(){监听成功})

     4,确定服务器监听端口成功,之后,在丰富完善createServer(函数)
       createServer(function(参数1,参数2){})
         参数1:请求内容
         参数2:响应内容
         通过 参数1.url 来判断请求的地址
         通过 参数2.end() 来返回响应内容
      createServer(function(req,res){
         if(req.url === '/路径地址'){
             根据这个路径地址,读取响应文件内容
             fs.readFile('路径' , 'utf-8' , function(err,data){
                 if(err !== null){
                     如果报错信息不是null,证明读取文件有错误
                     return console.log(err)
                 }
                 如果报错新消息是null,证明读取成功,向服务器发送响应内容
                 res.end(data);
             })
         }

         有其他的请求,判断其他的路径地址,读取相应的文件,返回相应的请求内容
      })

```

### [#](https://www.geeksforgeeks.org/node-js-url-method/)Node.js URL() Method

The ‘url’ module provides utilities for URL resolution and parsing. The getters and setters implement the properties of URL objects on the class prototype, and the URL class is available on the global object.

**Syntax:**

```js
new URL(input[, base])
```

**Parameters:** This method accepts two parameters as mentioned above and described below:

**input** <*string*>**:** It is the input which is *string* type that is used to parse the absolute or relative input URL. The base is required if the input is relative and ignored if the input is absolute.

**base** <*string*> **|** <*URL*>**:** It is the base URL which is either of *string* type or *URL*, used to resolve against if the input is absolute or not.

**Return Value:** It returns the new URL generated along with an array of data like hostname, protocol, pathname, etc. 

## ⛳️Create a simple web server

> Load http module

```javascript
const http = require('http');
```

> Creating server objects - The http module object is used to perform the functions of the http module

```javascript
http.createServer((req, res) => {
  res.end("Hello from server!");
});
```
>  Listen to incoming request from clients
```javascript
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
```
> 函数可以定义两个参数 
>
> - req : 存储的是每次发送的请求信息,也就是在地 址栏输入的信息
>       没有请求,不会有信息存储
> - req.url 是每次访问请求的地址 地址是 127.0.0.1:8080 之后的内容
>   - 例如 127.0.0.1:8080/index.html 
> - req.url 就是 /index.html 可以根据 不同的请求路径 读取不同的文件内容,显示在页面中
> - res : 存储是每次请求返回的响应内容
> - res.end(内容)向浏览器返回本次请求的响应内容, 也就是向浏览器返回一个html页面的程序代码,程序代码,往往是我们通过 fs模块 读取的文件内容
>

### [#](https://www.geeksforgeeks.org/node-js-response-writehead-method/)Node.js response.writeHead() Method

response.writeHead()  property is an inbuilt property of the ‘http’ module which sends a response header to the request. The status code is a 3-digit *HTTP* status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable *statusMessage* as the second argument.

**Syntax:**

```
response.writeHead(statusCode[, statusMessage][, headers]);
```

**Parameters:** It accepts three parameters as mentioned above and described below:

- **statusCode** <*number*>**:** It accepts the status codes that are of number type.
- **statusMessage** <*string*>**:** It accepts any string that shows the status message.
- **headers** <*Object*>**:** It accepts any function, array, or string.

**Return Value** <*http.ServerResponse*>**:** It returns a reference to the *ServerResponse*, so that calls can be chained.

```js
// Calling response.writeHead method
 const server = http.createServer((req, res) => {
  const pathName = req.url;
  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
  });
```



### [#](https://expressjs.com/en/guide/routing.html)Routing

**What is Routing?**
*Routing* refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see [Basic routing](https://expressjs.com/en/starter/basic-routing.html).

These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

```js
// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
```



 

```js
const url = require('url');

const server = http.createServer((req, res) => {
const pathName = req.url;
  
  if(pathName === "/" || pathName === "/overview"){
    res.end("This is overview page")
  }else if(pathName === "/product"){
    res.end("This is Product page")
  }else{
    res.end("page not found!")
  }
});
```



```js
const cardsHtml =  dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
```

- **dataObj** - variable contains an array of json data objects with the properties **productName**, **image**, **from** etc.
- **.map** - standard array's method which receives a callback function as an argument that will be invoked for each object in the array. The returning value is always an array with the same number of items as in the source one, but the values of the new array will correspond to the values returned by the provided callback from each iteration. If the callback doesn't explicitly return a value, then the resulting item will be **undefined** and still be part of the resulting array.
- **replaceTemplate** is a function that receives 2 arguments, tempCard is an HTML string that is read from the file (be aware that strings are getting copied when passed as arguments unlike objects, which passed by the reference), so replaceTemplate will always get the fresh copy of the HTML template (with placeholders) and all the modifications based on that will be done to its copy but not to the original one. Knowing this fact, I suppose the following line is redundant: let output = temp; So the author could directly change the value of temp and it won't harm the original value got from the file :) So this function replaces all the placeholders in the input string with the values from the object and returns this value to the .map. This means that the result of the .map will be an array of strings with replacements (the list of cards with real values)
- **.join** takes the array with the cards (HTML strings) and concatenates all of them in one string with no separator, so the result will contain a list of cards in HTML format.

 



