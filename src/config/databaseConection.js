import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/alura-node");

const databaseConection = mongoose.connection

export default databaseConection;