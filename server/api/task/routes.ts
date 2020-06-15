import express, { Express, Request, Response, Router, request } from "express";
import MongoDBTask from "../../src/task/infrastructure/mongodb/task";
import TaskController from "./controller";

const router: Router = express.Router();

router.post("/", async (request: Request, response: Response) => {
  const controller = new TaskController();

  try {
    const task = (await controller.save(
      request.body.name,
      request.body.priority,
      request.body.dueDate,
      request.body.userEmail
    )) as MongoDBTask;

    response.status(201).json({
      id: task.id,
      name: task.name,
      dueDate: task.dueDate,
      priority: task.priority,
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

export default router;
