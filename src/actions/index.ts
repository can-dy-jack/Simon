import { baseURL } from "@/config";

export function getUserInfo() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "getUserInfo", {
    method: "POST",
    headers: myHeaders,
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
  })
    .then((response) => response.json());
}

export function findBlocked(userId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "findBlocked", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      userId
    }),
  })
    .then((response) => response.json());
}

export function getFollowReqs() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "getFollowReqs", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({})
  })
    .then((response) => response.json());
}

export function switchFollow(userId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "switchFollow", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ userId })
  })
    .then((response) => response.json());
}

export function findFollowing(userId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "findFollowing", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      userId
    }),
  })
    .then((response) => response.json());
}

export function findFollowingReq(userId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "findFollowingReq", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      userId
    }),
  })
    .then((response) => response.json());
}

export function getMedia() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(baseURL + "getMedia", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({}),
  })
    .then((response) => response.json());
}
