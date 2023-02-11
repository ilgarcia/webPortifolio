import axios from "axios";
// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://api.ilgarcia.com";

export default axios.create({
  baseURL: BASE_URL,
});