const express = require('express');
router = express.Router()
const { Sequelize, DataTypes, Model } = require('@sequelize/core');


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

module.exports = router