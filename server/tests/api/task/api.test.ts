import app from "../../../api/app";
import request from "supertest";
import faker from "faker";
import db from "../../../api/db";
import { TaskPriority } from "../../../src/task/domain/task";
import { response } from "express";

faker.locale = "en_US";

describe("Test Task api", () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  });

  it("should response status code 200 and the created task", async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: "123456",
    };

    const userCreatedResponse = await request(app).post("/api/user").send(user);

    const task = {
      name: faker.lorem.word(),
      priority: TaskPriority.Hight,
      dueDate: new Date(),
      userEmail: userCreatedResponse.body.email,
    };

    const taskCreatedResponse = await request(app).post("/api/task").send(task);

    console.log(taskCreatedResponse.body);

    expect(taskCreatedResponse.type).toBe("application/json");
    expect(taskCreatedResponse.status).toBe(201);
    expect(taskCreatedResponse.body.name).toBe(task.name);
    expect(taskCreatedResponse.body.priority).toBe(TaskPriority.Hight);
    expect(taskCreatedResponse.body.id.length).toBeGreaterThan(0);
  });
});
