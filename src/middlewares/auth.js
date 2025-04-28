
import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => {
    const cookie = req.headers.cookie;
    if (!cookie) return res.status(401).send("user Unauthorized")
    const authToken = cookie.split("=")[1];

   verifyJWT(authToken).then((data)=>{
    
    req.user=data;
  
    next();
   }).catch(()=>{
    res.status(404).send("Invalid token.")
   })
   
  
 
}

export default auth;