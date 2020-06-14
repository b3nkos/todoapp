import express, { Express, Request, Response } from "express";
const bodyParser = require("body-parser");
import userRouter from "./user/routes";

const app: Express = express();

app.use(bodyParser.json());

app.get("/", (request: Request, response: Response) => {
  response.status(200).send(process.env.DB_USER);
});

app.use("/api/user", userRouter);

export default app;
