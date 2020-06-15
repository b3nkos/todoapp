import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

mongoose.Promise = global.Promise;

const result = dotenv.config({
  path: path.join(path.dirname(__dirname), ".env"),
});

if (result.error) {
  throw result.error;
}

const uri: string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  authSource: "admin",
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
};

async function connect() {
  await mongoose.connect(uri, options);
  const connection = mongoose.connection;

  connection.on("error", (error) => {
    throw error;
  });

  connection.once("open", function () {
    console.log("######DB CONNECTED JODAAAAAAAA#########");
  });
}

async function close() {
  await mongoose.connection.close();
}

export default {
  connect,
  close,
};
