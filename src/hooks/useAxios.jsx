import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://homenest-server-hcpj3tua8-sehabul-islams-projects.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
