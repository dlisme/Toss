import Axios from "axios";
// import { useHistory } from "react-router-dom";

// 添加请求拦截器
Axios.interceptors.request.use(
  function (config) {
    config.headers = config.headers || {};
    config.headers["token"] = localStorage.getItem("token")!;
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Axios.interceptors.response.use(
  function (response) {
    // let history = useHistory();
    const { code } = response.data;
    switch (code) {
      case 401:
        return localStorage.removeItem("token");
      // history.push("/");
      default:
        return response;
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

Axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

const url = process.env.REACT_APP_BASE_URL;
const baseApi = process.env.REACT_APP_BASE_API;

/** 请求地址*/
export const apiUrl = `${url}${baseApi}`;
