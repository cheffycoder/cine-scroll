import axios from "axios";

console.log("adf", process.env.REACT_APP_BASE_URL)

const axiosRef = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

axiosRef.interceptors.request.use((config) => {
  const token = process.env.REACT_APP_TOKEN;
  config.headers.Accept = "application/json";

  // Add api_key to the params
  config.params = {
    ...config.params,
    api_key: token,
  };

  return config;
});

type payload = Record<string, any>;

const get = async (URL: string, payload?: payload) =>
  await axiosRef.get(URL, payload).then((response) => response);

export { get };
