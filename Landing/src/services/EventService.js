import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "../services/ServiceHelper";

let createEvent = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/events/",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let updateEvent = (payload) => {
  const config = {
    method: "POST",
    url: `https://api.remotebootcamp.dev/api/events/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let getEvents = (pageIndex, pageSize, dateStart, dateEnd) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/events/search?pageIndex=${pageIndex}&pageSize=${pageSize}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
let getLocation = (latitude, longitude, radius) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/events/search/geo?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
let getFeed = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/events/feed?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { createEvent, updateEvent, getEvents, getLocation, getFeed };
