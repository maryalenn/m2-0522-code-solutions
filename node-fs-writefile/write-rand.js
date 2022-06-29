const fs = require('fs');
const randomNum = Math.random();

fs.writeFile('random.txt', (randomNum.toString() + '\n'), { flag: 'a+' }, function (err) {
  if (err) { return err; }
});
