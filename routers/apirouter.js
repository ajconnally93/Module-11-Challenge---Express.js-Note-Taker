const fs = require('fs');

const express = require('express');
const app = express.Router();

// module.exports = function() {
  
// GETS the written notes
  app.get('/notes', function(req, res) {
    fs.readFile('db/db.json', (err, data) => {
      if (err) throw err;
      console.log(data);
    //   sends json data
      dbDataJson = JSON.parse(data);
      res.send(dbDataJson);
    });
  });

// SENDS JSON DATA TO SERVER IN /api/notes
  app.post('/notes', function(req, res) {
    const writtenNotes = req.body;

    fs.readFile('db/db.json', (err, data) => {
      if (err) throw err;

    //   technically don't have to set this but makes it a lot easier
      dbDataJson = JSON.parse(data);
      dbDataJson.push(writtenNotes);
      let numberId = 1;

    //   forEach iterates through index
      dbDataJson.forEach((note, index) => {
        note.id = numberId;
        numberId++;
        return dbDataJson;
      });

    //   console.log(dbData);
      stringedData = JSON.stringify(dbDataJson);
      fs.writeFile('db/db.json', stringedData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send("Note posted.");
  });
// };

module.exports = app;