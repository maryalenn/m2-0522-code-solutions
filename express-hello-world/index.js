const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  // console.log(req.method);
  res.send('Not everything has to have a point. Some things just are.');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
