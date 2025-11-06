import { use } from "react"
import { AuthContext } from "../Context/AuthContext"


 const useAuth = () => {
  const {user} = use(AuthContext);

  return user
 }


 export default useAuth;