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
  },
}, { sequelize, modelName: 'Jokes' });


sequelize.sync()
  .then(() => {
    console.log('Base de données et tables synchronisées !');
  })
  .catch(err => console.error('Erreur lors de la synchronisation de la base de données :', err));


/*sequelize.sync({ force: true })
  .then(() => {
    console.log('Base de données et tables créées !');
    return Jokes.bulkCreate([
        { joke: 'Quelle est la femelle du hamster ? L’Amsterdam' },
        { joke: 'Que dit un oignon quand il se cogne ? Aïe' },
        { joke: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette." },
        { joke: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit"},
        { joke: "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes."},
        { joke: "Que se fait un Schtroumpf quand il tombe ? Un Bleu "},
        { joke: "Quel est le comble pour un marin ? Avoir le nez qui coule"},
        { joke: "Qu'est ce que les enfants usent le plus à l'école ? Le professeur"},
        { joke: "Quel est le sport le plus silencieux ? Le para-chuuuut"},
        { joke: "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule"}
      ]);
  })
  .then(jokeEntry => {
    console.log("Blague ajoutée :", jokeEntry.joke);
  })
  .catch(err => console.error('Erreur lors de la synchronisation de la base de données :', err));
*/
module.exports = router