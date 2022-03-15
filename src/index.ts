import "./env";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import * as config from "./config";
import helmet from "helmet";
import { ConnectionOptions, createConnection } from "typeorm";
import dbconfig from "./utils/database";
import Router from "./routes";

const app = express();

app.use(cors(config.CORS_OPTIONS));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tue Truong application." });
});

const PORT = config.PORT;

const connectionOptions = { ...dbconfig, name: "TestDB" };

createConnection(connectionOptions)
  .then((_connection) => {
    console.log("_connection: ", _connection.name);
    app.use(Router);
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("err: ", err);
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
