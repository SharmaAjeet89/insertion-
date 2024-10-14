import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
let client;

export  async function connectToMongoDB()  {
     await MongoClient.connect(url).then(clientInstance => {
        client = clientInstance;
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });
};

export const getDB = () => {
    if (!client) {
        throw new Error("MongoDB client is not connected. Call connectToMongoDB first.");
    }
    return client.db("confessions");
};
