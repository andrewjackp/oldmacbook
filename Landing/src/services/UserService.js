import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "./ServiceHelper";

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let getCurrentUser = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let getUserById = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/users/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let logOut = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { logIn, register, getCurrentUser, getUserById, logOut };
