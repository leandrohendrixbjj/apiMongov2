import mongoose from "mongoose";
import 'dotenv/config'

const STR_CONNECTION = process.env.CONNECTION

mongoose.connect(STR_CONNECTION);

const databaseConection = mongoose.connection

export default databaseConection;