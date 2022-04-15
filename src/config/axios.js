import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost:5000/api/",
  baseURL: "",
  headers: {
    // "Content-Type": "application/json",
    // "X-Requested-With": "XMLHttpRequest",
    // "Access-Control-Allow-Origin": "*",
    // timeout: 1000,
  },
});

export default instance;
