import NewUserRequest from "../../../src/user/domain/request";
import NewUserResponse from "../../../src/user/domain/response";
import UserCreatorService from "../../../src/user/application/creator.service";
import UserSearcherService from "../../../src/user/application/searcher.service";
import UserInMemoryRepository from "../../../src/user/infrastructure/custom/repository";

describe("The creation of new user", () => {
  it("should return user object when a new user is created", async () => {
    const searcherService = new UserSearcherService(
      new UserInMemoryRepository()
    );
    const creatorService = new UserCreatorService(
      new UserInMemoryRepository(),
      searcherService
    );

    const request: NewUserRequest = {
      user: {
        name: "Jon Doe",
        email: "jondoe@gmail.com",
        password: "123456",
      },
    };

    const response: NewUserResponse = await creatorService.execute(request);
    expect(response.user.name).toBe("Jon Doe");
    expect(response.user.email).toBe("jondoe@gmail.com");
  });
});
