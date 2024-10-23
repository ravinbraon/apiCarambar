const express = require("express");
const { Sequelize, DataTypes, Model } = require('@sequelize/core');
const { SqliteDialect } = require('@sequelize/sqlite3');

const app = express();
const port = 3000;

class Jokes extends Model {}

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'sequelize.sqlite'
});

Jokes.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  joke: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'Jokes' });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
