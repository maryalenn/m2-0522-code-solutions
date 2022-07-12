
const express = require('express');
const app = express();
const port = 3000;
const grades = require('./Grades');

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const student in grades) {
    gradesArr.push(grades[student]);
  }
  res.json(gradesArr);
});

// });
app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on ' + port);
});
