import { baseURL } from "@/config";

export function getUserInfo() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "getUserInfo", {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
  })
    .then((response) => response.json());
}

export function getUserInfoByUsername(username: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "getUserInfoByUsername", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      username
    }),
    redirect: "follow"
  })
    .then((response) => response.json());
}
