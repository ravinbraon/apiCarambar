const express = require("express");
const sqlite = require ('./routes/sqlite');
const joke = require("./routes/joke")
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sqlite, joke);




app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
