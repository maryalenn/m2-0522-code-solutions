
const express = require('express');
const app = express();
const port = 3000;
let nextId = 1;
const grades = {};

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on ' + port);
});

app.use(express.json());
app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const student in grades) {
    gradesArr.push(grades[student]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});
