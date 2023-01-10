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
  
  console.log("data",data);
    return client.post(
      authEndPoint.login,
      { "email":data?.email,"password":data?.password },
      { authorization: false }
    );
  }

export function getProfile() {
  return client.get("/users/profile");
}
