const express = require("express");
const { Sequelize, DataTypes, Model } = require('@sequelize/core');

const app = express();
const port = 3000;

class Jokes extends Model {}

const sequelize = new Sequelize({
  dialect: 'sqlite',
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


sequelize.sync()
  .then(() => {
    console.log('Base de données et tables synchronisées !');
  })
  .catch(err => console.error('Erreur lors de la synchronisation de la base de données :', err));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
