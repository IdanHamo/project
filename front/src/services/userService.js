import httpService from "./httpService";

const tokenKey = "token";

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function signInUser(values) {
  const { data } = await httpService.post("/auth", values);
  localStorage.setItem(tokenKey, data);
}

const userService = {
  createUser,
  signInUser,
};
export default userService;
