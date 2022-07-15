import httpService from "./httpService";

const storageKeyToken = "token";

export function createUser(user) {
  return httpService.post("/users", user);
}

export function loginUser(values) {
  const { data } = await httpService.post("/auth", values);
   localStorage.setItem(storageKeyToken, data.token);
}

const userService = {
  createUser,
  loginUser,
};
export default userService;
