const client = require('./client');

client.list(
  {},
  (error, vegetables) => {
    if (error) {
      console.error(error);
    }
    console.log(`>>> Boom! Vegetables incoming!`);
    console.log(vegetables);
  }
);