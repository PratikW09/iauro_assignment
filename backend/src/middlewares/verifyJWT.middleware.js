import  User  from "../models/user.models.js";
import { decodeToken } from "../utils/token.utils.js";

export const verifyJWT = async(req,res,next)=>{
    try {
        
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if(!token){
            throw new Error(401,"Unauthorized request")
        }
        const decodedTokenID = await decodeToken(token);
        // console.log(decodedToken)
        const user = await User.findById(decodedTokenID).select(
            "-password"
        )
        if(!user){
            throw new Error(401,"Invalid  Token")
    
        }
    
        req.user = user;
        next();
    } catch (error) {

        res.status(405).json({ message: error.message || 'Invalid  Token' });
    }
    
}