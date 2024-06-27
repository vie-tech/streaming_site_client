import axios from 'axios'
import queryString from "query-string"

const privateAxiosRequest = axios.create({
    baseURL: 'http://localhost:6161/api/',
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
    withCredentials: true
})


privateAxiosRequest.interceptors.response.use(
    (response) => {
      if (response && response.data) return response.data;
      return response;
    },
    (err) => {
      throw err.response.data;
    }
  );
  

export default privateAxiosRequest;