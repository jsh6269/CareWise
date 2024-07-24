import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

// 누구나 접근 가능한 API들
export const instance = axios.create();
