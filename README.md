# ⛺️ Bootcamp ブートキャンプ 2023 => Node.js, Express, MangoDB

- [⛺️ Bootcamp ブートキャンプ 2023 =\> Node.js, Express, MangoDB](#️-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)
  - [🚀Section 00: Set\_up](#section-00-set_up)
        - [VSCode setup](#vscode-setup)
  - [🚀 Section 01: Welcome](#-section-01-welcome)
  - [🚀Section 02: Introduction to Node.js and NPM](#section-02-introduction-to-nodejs-and-npm)

## 🚀Section 00: Set_up

##### [VSCode setup](https://github.com/jonasschmedtmann/complete-node-bootcamp/blob/master/vscode-setup.md)

[Course Material and FAQ](https://github.com/jonasschmedtmann/complete-node-bootcamp)

## 🚀 Section 01: Welcome

**[⬆ back to top](#-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)**

## 🚀Section 02: Introduction to Node.js and NPM

**[⬆ back to top](#️-bootcamp-ブートキャンプ-2023--nodejs-express-mangodb)**

### #Blocking and Non-Blocking: Asynchronous Nature of Node.js

> Synchronous=>blocking

```javascript
const fs = require("fs");

//Blocking code executed synchronously
//同期的に実行されるブロック化コード
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
const textOutput = `This is: ${textInput}.\n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written to /txt/output.txt");
```

> Asynchronous => non-blocking

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

### #http module 详解

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

```javascript
总结
1,功能:
     通过 node.js 的 内置fs模块 和 内置 http 模块,搭建一个简易的本地服务器
2,步骤思路:
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

### #fs module 详解



```javascript
内置模块 --- fs模块
不需要下载安装,只要加载,就可以直接使用
读取,导入,外部文件的内容
可以操作 系统中的文件

1,建立一个 fs 模块对象 / 导入fs模块并且执行

导入的是fs模块,在 变量中 存储,变量fs就可以执行模块的功能
类似 通过构造函数生成实例化对象,实例化对象中,可以调用构造函数封装的函数方法

/*
    class FS{
        fun1(){}

        fun2(){}
    }

    const 实例化对象 = new FS();
    实例化对象中,就可以调用构造函数中的函数方法 fun1() fun2()...
*/

fs变量就可以调用 fs模块中,定义的方法
const fs = require('fs');

通过 内置模块加载对象,来调用 模块的功能

功能1:
fs对象.readFile()   对文件读取功能
语法格式:
    fs对象.readFile( 要读取文件的路径 , 编码格式(选填) , 读取完毕执行的函数  ) 
        参数1: 要读取文件的路径
            可以是 绝对路径---url地址
            可以是 相对路径---从执行的外部js文件开始的相对路径

        参数2: 读取完毕,执行的函数
            参数中可以定义两个形参,形参的名称,可以是任意的符合命名规范的字符
            一般第一个形参 是 err 第二个形参是 data
            模块化,自行向两个形参中自动存储内容
            第一个形参中存储的是 读取文件失败的报错信息
                    如果读取成功,报错信息是 null 
            第二个形参中存储的是 读取文件成功的数据信息
                    如果读取失败,读取的数据信息是 undefined
                    如果读取成功,默认的编码格式是 Buffer 格式的数据
                        以十六进制数据,显示的 二进制数据流
                    一般定义的是 utf-8 格式
                                    
    总结:
    参数1: 需要读取文件的路径,一般是从当前外部js文件开始的相对路径
    参数2: 编码格式, utf-8 
            在cmd中执行,如果 utf-8 显示是 乱码 可以试试 gbk 
            但是实际项目不会在cmd中显示,都是在浏览器中运行,必须要设定为utf-8
    参数3: 读取结束,执行的回调函数
            回调函数的参数1,报错信息,读取成功时,是 null    
            回调函数的参数2,数据信息,读取失败时,是 undefined  


功能2: 
fs对象.writeFile()   对文件写入内容功能
语法格式:
    fs对象.writeFile( 要读取文件的路径 , 要写入的内容 , 写入完毕执行的函数 )
        写入文件操作,有文件写入,如果文件写错了也就是没有文件那么创建文件也要写入
        这个方法执行起来一定不会报错
        如果是已经存在的文件,执行时,会覆盖之前存在的内容,执行结果是定义的写入的内容
        写入完毕执行的函数,没有任何自动存储信息的形参,只是简单的执行程序
        函数可以写一个空函数,但是必须要有

node.js程序都是异步执行的
也有同步执行的方式
语法格式,功能,参数,与异步是完全一致的
但是我们一般不使用同步形式
fs对象.readFileSync() 
fs对象.writeFileSync() 

```



### #Create a simple web server

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




### #Routing

[Node.js response.writeHead() ](https://www.geeksforgeeks.org/node-js-response-writehead-method/)

### #Building a API

1. building HTML templates and holding the data
   1. Data is read from JSON
   2. 



⁇ 👇

```js
const cardsHtml =  dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
```

- **dataObj** - variable contains an array of json data objects with the properties **productName**, **image**, **from** etc.
- **.map** - standard array's method which receives a callback function as an argument that will be invoked for each object in the array. The returning value is always an array with the same number of items as in the source one, but the values of the new array will correspond to the values returned by the provided callback from each iteration. If the callback doesn't explicitly return a value, then the resulting item will be **undefined** and still be part of the resulting array.
- **replaceTemplate** is a function that receives 2 arguments, tempCard is an HTML string that is read from the file (be aware that strings are getting copied when passed as arguments unlike objects, which passed by the reference), so replaceTemplate will always get the fresh copy of the HTML template (with placeholders) and all the modifications based on that will be done to its copy but not to the original one. Knowing this fact, I suppose the following line is redundant: let output = temp; So the author could directly change the value of temp and it won't harm the original value got from the file :) So this function replaces all the placeholders in the input string with the values from the object and returns this value to the .map. This means that the result of the .map will be an array of strings with replacements (the list of cards with real values)
- **.join** takes the array with the cards (HTML strings) and concatenates all of them in one string with no separator, so the result will contain a list of cards in HTML format.

 



