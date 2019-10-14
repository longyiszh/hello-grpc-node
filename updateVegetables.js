const client = require('./client');

// let updateRequest = {
//   id: "rcpd1210qabbb",
//   token: {
//     health: 52.8,
//     isBiologique: false
//   }
// };

// let updateRequest = {
//   id: "rcpd1210qabbb",

//   health: 52.8,
//   isBiologique: false

// };  // <-- is bad. Causes empty string and 0 values.

// a complete object is always necessary when sent to grpc server
let updateRequest = {
  id: "rcpd1210qabbb",
  name: "Super Radish",
  price: 8.88,
  health: 12.75,
  isBiologique: false,
};

client.update(updateRequest, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Update ${updateRequest.id} sucessful`);
    console.log(response);
  }
});