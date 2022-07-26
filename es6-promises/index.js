const takeAChance = require('./take-a-chance');

const results = takeAChance('Marya');
results.then(value => {
  console.log(value);
});
results.catch(error => {
  console.error(error.message);
});
