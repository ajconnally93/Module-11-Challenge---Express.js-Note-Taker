const fs = require('fs');

module.exports = function(app) {
  
// GETS the written notes
  app.get('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

    //   sends json data
      dbDataJson = JSON.parse(data);
      res.send(dbDataJson);
    });
  });

// SENDS JSON DATA TO SERVER IN /api/notes
  app.post('/api/notes', function(req, res) {
    const writtenNotes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
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
      stringedData = JSON.stringify(dbData);
      fs.writeFile('./db/db.json', stringedData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send("Note posted.");
  });
};