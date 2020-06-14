import app from "../../../../api/app";
import request from "supertest";
import faker from "faker";
import db from "../../../../api/db";

faker.locale = "en_US";

describe("Test user api", () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  });

  it("should response status code 200 and the created user", async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: "123456",
    };

    const response = await request(app).post("/api/user").send(user);

    expect(response.type).toBe("application/json");
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(user.name);
    expect(response.body.email).toBe(user.email);
    expect(response.body.id.length).toBeGreaterThan(0);
  });
});
