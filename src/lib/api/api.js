import Api from "../services/agent";

import publicIp from "public-ip";

export async function loginUser(params) {
  const response = await Api.get("users/accessTokens", params);
  return response;
}

export async function logoutUser(params) {
  const response = await Api.delete("/users/accessToken");
  return response;
}
export async function registerUser(params) {
  const response = await Api.post("/users", params);
  return response;
}
export async function getUserData() {
  const response = fetch("https://extreme-ip-lookup.com/json/");
  return response;
}
export const getClientIp = async () =>
  await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"],
  });
