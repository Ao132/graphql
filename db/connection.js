import mongoose from "mongoose";

export const dbConn = async(req, res) => {
await  mongoose
    .connect("mongodb://localhost:27017/graphQl")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.log("Error connecting to MongoDB");
    });
};
