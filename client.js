const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const legumeDef = protoLoader.loadSync("./legume.proto");
const legumeProto = grpc.loadPackageDefinition(legumeDef).legume;

const VegetableService = legumeProto.VegetableService;

const host = "localhost:50051";

const client = new VegetableService(host, grpc.credentials.createInsecure());

module.exports = client;