import axios, { AxiosError } from 'axios'

const axiosRef = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

axiosRef.interceptors.request.use(config => {
  const token = '2dca580c2a14b55200e784d157207b4d';
  config.headers.Accept = 'application/json';
  
  // Add api_key to the params
  config.params = {
    ...config.params,
    api_key: token,
  };
  
  return config;
});

type payload = Record<string, any>

const get = async (URL: string, payload?: payload) => await axiosRef.get(URL, payload).then(response => response)

export { get }
