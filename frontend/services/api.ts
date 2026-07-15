import axios from "axios";

export default axios.create({
  baseURL: process.env.EXPO_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});