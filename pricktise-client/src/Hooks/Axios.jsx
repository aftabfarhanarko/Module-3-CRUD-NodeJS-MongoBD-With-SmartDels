import axios from "axios";

const inseart = axios.create({
  baseURL: "https://pricktise-server.vercel.app",
});

const useAxios = () => {
  return inseart;
};

export default useAxios;
