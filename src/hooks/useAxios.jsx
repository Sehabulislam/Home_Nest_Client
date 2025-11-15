import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://homenest-server-kappa.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
