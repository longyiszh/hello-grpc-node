const grpc = require('grpc');


const legumeProto = grpc.load("./legume.proto");

const gServer = new grpc.Server();

let legumes = [
  {
    id: "rcpd1210qabbb",
    name: "Super Radish",
    price: 43.15,
    health: 100.0,
    isBiologique: true,
  }
];

gServer.addService(legumeProto.VegetableService.service, {
  list: (_, callback) => { callback(null, legumes) },
  insert: (ctx, callback) => {
    let newLegume = ctx.request;
    
    
    newLegume.id = `newLLEEgggUUmmmEE${ parseInt(Math.random() * 100)}`;

    console.log(newLegume);
    legumes.push(newLegume);

    callback(null, newLegume);
  }

});

const host = "localhost:50051";

gServer.bind(host, grpc.ServerCredentials.createInsecure());

console.log(`gRPC Server is running at ${host}`);

gServer.start()