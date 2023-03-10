const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// console.log(app.get('env'));
console.log(process.env);

// 4) START SERVER
const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
