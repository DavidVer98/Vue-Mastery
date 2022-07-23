// Single Axios instance for our app
import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/DavidVer98/Vue-Mastery",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    console.log(id);
    return apiClient.get("/events/" + id);
  },
};
