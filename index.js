const express = require("express");
const sqlite = require ('./routes/sqlite');
const joke = require("./routes/joke")
const app = express();
const port = 3000;

app.use(sqlite, joke);


app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
