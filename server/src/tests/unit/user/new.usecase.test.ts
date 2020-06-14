import CreateNewUserUseCase from "../../../user/application/new.usecase";
import UserInMemoryRepository from "../../../user/infrastructure/inmemory.repository";
import NewUserRequest from "../../../user/domain/request";
import NewUserResponse from "../../../user/domain/response";

describe("The creation of new user", () => {
  it("should return user object when a new user is created", async () => {
    const useCase = new CreateNewUserUseCase(new UserInMemoryRepository());

    const request: NewUserRequest = {
      user: {
        name: "Jon Doe",
        email: "jondoe@gmail.com",
        password: "123456",
      },
    };

    const response: NewUserResponse = await useCase.execute(request);
    expect(response.user.email).toBe("jondoe@gmail.com");
  });
});
