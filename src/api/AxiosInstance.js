import axios from "axios";
import { API_URL } from "./constant";

const accessToken = localStorage.getItem("jwtToken")

console.log(accessToken)
const axiosinstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosinstance;