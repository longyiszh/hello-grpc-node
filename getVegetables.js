const client = require('./client');

client.list(
  {
    message: "daruabao"
  },
  (error, vegetables) => {
    if (error) {
      console.error(error);
    }
    console.log(`>>> Boom! Vegetables incoming!`);
    console.log(vegetables);
  }
);