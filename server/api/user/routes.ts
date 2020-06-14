import express, { Express, Request, Response, Router, request } from "express";
import UserController from "./controller";
import MongoDBUser from "../../src/user/infrastructure/mongodb/user/user";

const router: Router = express.Router();

router.post("/", async (request: Request, response: Response) => {
  const controller = new UserController();

  try {
    // const user = (await controller.save(
    //   request.body.name,
    //   request.body.email,
    //   request.body.password
    // )) as MongoDBUser;

    const user = (await controller.save(
      request.body.name,
      request.body.email,
      request.body.password
    )) as MongoDBUser;

    response
      .status(201)
      .send({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

export default router;
