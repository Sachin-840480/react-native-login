import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.29.179:5000",
  headers: {
    "Content-Type": "application/json",
  },
});