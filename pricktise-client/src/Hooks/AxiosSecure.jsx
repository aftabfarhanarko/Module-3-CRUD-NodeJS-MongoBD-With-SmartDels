import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const insart = axios.create({
  baseURL: "https://pricktise-server.vercel.app",
});

const useSecureAxios = () => {
   
    const {user,userLogOut} = use(AuthContext);
  const navigets = useNavigate();

    useEffect(()=> {
        // request interceptor
        const interceptorIdRequest = insart.interceptors.request.use((configs) => {
            if(user?.accessToken) {
                configs.headers.author = `Berear ${localStorage.getItem("token")}`
            }
            return configs;
        })
        const responseId = insart.interceptors.response.use((res)=>{
          return res;
        }, (err) => {

            const stats = err.status;
            if(stats === 401 || stats === 403){
            userLogOut()
            navigets('/login');
            }
        })


        return () => {
            insart.interceptors.request.eject(interceptorIdRequest);

            insart.interceptors.response.eject(responseId);
        }

    },[user, userLogOut, navigets])

    return insart;
}

export default useSecureAxios;