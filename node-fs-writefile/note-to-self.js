const fs = require('fs');
const notes = process.argv[2];

fs.writeFile('notes.txt', (notes + '\n'), { flag: 'a+' }, function (err) {
  if (err) { return err; }
});
