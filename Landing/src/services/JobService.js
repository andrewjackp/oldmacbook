import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "../services/ServiceHelper";

let getJobs = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/jobs?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let createJob = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/jobs",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let updateJob = (payload) => {
  const config = {
    method: "PUT",
    url: `https://api.remotebootcamp.dev/api/jobs/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let searchJobs = (searchTerm) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/jobs/search?pageIndex=0&pageSize=12&searchTerm=${searchTerm}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let getJobById = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

let deleteJob = (deleteId) => {
  const config = {
    method: "PUT",
    url: `https://api.remotebootcamp.dev/api/jobs/${deleteId}/2`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { getJobs, createJob, updateJob, searchJobs, getJobById, deleteJob };
