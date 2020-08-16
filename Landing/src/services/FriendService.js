import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "../services/ServiceHelper";

let getFriends = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let getFriendsById = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let deleteFriendById = (deleteId) => {
  const config = {
    method: "DELETE",
    url: `https://api.remotebootcamp.dev/api/friends/${deleteId}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let createFriend = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends/",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let updateFriend = (payload) => {
  const config = {
    method: "PUT",
    url: `https://api.remotebootcamp.dev/api/friends/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let searchByQuery = (searchQuery) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=10&q=${searchQuery}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export {
  getFriends,
  deleteFriendById,
  getFriendsById,
  createFriend,
  updateFriend,
  searchByQuery,
};
