const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router()


let db = new sqlite3.Database('./sequelize.sqlite', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to jokes dataBase');
  }
});


router.get("/blagues", (req, res) => {
    let sql = 'SELECT joke FROM Jokes';
    db.all(sql, (error,rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows)
      }
    });
  });


  router.get("/blagues/random",(req,res) => {

    function getRandomJoke(numberJoke) {
      const randomId = Math.floor(Math.random() * numberJoke);
      let sql = 'SELECT Joke FROM Jokes WHERE id = ?';
      db.get(sql, [randomId], (error,row) => {
        if (error) {
          console.log(error);
        } else {
          res.send(row)
        }
      })
    }

    function toKnowNumberJoke () {
      let sql = 'SELECT COUNT(*) as count FROM Jokes';
      db.get(sql, (error,row) => {
        if (error) {
          console.log(error);
        } else {
          const numberJoke = (row.count);
          getRandomJoke(numberJoke)
        }
      })
    }

    toKnowNumberJoke();
  })

  router.get("/blagues/:id",(req,res) => {
    const JokeId = Number(req.params.id);
    let sql = 'SELECT joke FROM Jokes WHERE id = ?';
    db.all(sql,[JokeId], (error,joke) => {
      if (error) {
        console.log(error)
      } else {
        res.send(joke)
      }
    })
  });


  router.post("/blagues/add", (req,res) => {
    const newJoke = req.body.joke;
    const date = Date();
    let sql = 'INSERT INTO Jokes (joke, createdAt, updatedAt) VALUES (?, ?, ?)';
    db.run(sql,[newJoke,date,date], (error) => {
      if (error) {
        console.log(error);
      } else {
        res.send("La nouvelle blague à bien été ajoutée")
      }
    })
  });
module.exports = router