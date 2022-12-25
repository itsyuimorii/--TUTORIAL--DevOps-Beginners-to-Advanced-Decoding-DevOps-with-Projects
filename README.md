# Bootcamp 2023 => Node.js, Express, MangoDB

## Section 01: Welcome

**[⬆ back to top](#table-of-contents)**

```javascript
const fs = require("fs");

//Blocking code executed synchronously
//同期的に実行されるブロック化コード
const textInput = fs.readFileSync("/txt/input.txt", "utf-8");
const textOutput = `This is: ${textInput}`;
```

//SYNCHRONOUS
