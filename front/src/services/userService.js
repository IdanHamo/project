import httpService from "./httpService";

export function createUser(user) {
  return httpService.post("/users", user);
}

const userService = {
  createUser,
};
export default userService;
