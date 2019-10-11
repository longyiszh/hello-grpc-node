const client = require('./client');

let newLegume = {

  name: `bonbon patato ${parseInt(Math.random() * 100)}`,
  price: (15 + Math.random() * 10),
  health: 100.0 - Math.random() * 100,
  isBiologique: false,

}

client.insert(newLegume, (error, vegetableAdded) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`>> Ding! We've got a new vegetable!`);
    console.log(vegetableAdded);
  }

});