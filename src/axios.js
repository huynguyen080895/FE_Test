import axios from "axios";
import _ from "lodash";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: false,
});
export default axiosClient;
