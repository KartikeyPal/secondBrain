import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { jwt_secreat } from "./config";
declare global {
    namespace Express {
      interface Request {
        userId?: string;
      }
    }
  }
export  function authRoute(req:Request,res:Response,next:NextFunction){
    const token = req.body.token;
    if(!token){
        res.status(403).json({
            message: "Please login"
        })
        return;
    }
    const decode:any = jwt.verify(token,jwt_secreat);

    req.userId = decode.userId;
    next();
}
