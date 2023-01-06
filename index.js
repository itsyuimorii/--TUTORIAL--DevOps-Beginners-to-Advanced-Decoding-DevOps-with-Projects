const fs = require("fs");

//Blocking code executed synchronously
//同期的に実行されるブロック化コード
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOutput = `This is: ${textInput}.\n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written to /txt/output.txt");

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
