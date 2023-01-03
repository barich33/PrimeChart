import { userEndPoint,authEndPoint } from "../api/api.endpoint";
import { client } from "./axiosClient";

export function register({ email, password }) {
  return client.post(
   userEndPoint.login,
    { email, password },
    { authorization: false }
  );
}

export function login({ data }) {
  console.log(data);
    return client.post(
      authEndPoint.login,
      { email:"tes@gmail.com", password:"123" },
      { authorization: false }
    );
  }

export function getProfile() {
  return client.get("/users/profile");
}
