const grpc = require('grpc');

const legumeProto = grpc.load("./legume.proto");

const VegetableService = legumeProto.VegetableService;

const host = "localhost:50051";

const client = new VegetableService(host, grpc.credentials.createInsecure());

module.exports = client;