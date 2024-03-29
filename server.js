const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const legumeDef = protoLoader.loadSync("./legume.proto");
const legumeProto = grpc.loadPackageDefinition(legumeDef).legume;

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
  list: (ctx, callback) => {
    console.log(ctx.request);
    
    callback(null, {legumes}); // <-- you ALWAYS have to return an object
  },

  insert: (ctx, callback) => {
    let newLegume = ctx.request;
    
    newLegume.id = `newLLEEgggUUmmmEE${ parseInt(Math.random() * 100)}`;

    legumes.push(newLegume);

    callback(null, newLegume);
  },

  update: (ctx, callback) => {
    let id = ctx.request.id;
    // let fieldsToUpdate = ctx.request.token;
    let reqVegetable = ctx.request;
    let vegetableToUpdate = legumes.find( (legume) => { return legume.id === id } );

    if (vegetableToUpdate) {
      // vegetableToUpdate = {
      //   ...vegetableToUpdate,
      //   ...fieldsToUpdate
      // };
      // <-- does not work. "fieldsToUpdate" contanins 0 or empty string, if a field is not provided. 
      //     You must replace vegetableToUpdate with a complete vegetable object.
      vegetableToUpdate = {...reqVegetable}
      callback(null, vegetableToUpdate);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: `Failed to find vegetable with id ${id}`
      })
    }

  }

});

const host = "localhost:50051";

gServer.bindAsync(host, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`gRPC Server is running at ${host}`);

  gServer.start()
});

