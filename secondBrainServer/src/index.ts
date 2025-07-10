import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {User,Tag,Content,Link,connectDb} from './db'
import { jwt_secreat } from './config';
import { authRoute } from './authMiddleware';
// Extend Express Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}



const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("server is running")
})


app.post('/api/v1/signup',async (req,res)=>{
   try {
    const {userName,password} = req.body;
    if(userName.length <3 || password.length <8){
        res.status(411).json({
            message: "error in input",
        })
        return;
    }
    const user  = await User.findOne({userName});
    if(user){
        res.status(403).json({
            message: "user already exist"
        })
        return;
    }

     await User.create({
        userName,password
    })

     res.status(200).json({
        message: "user is successfully created"
    })
    return;
    
   } catch (error) {
        res.status(500).json({
            message: "internal server error in signUp controller"
        })
        return;
   }
})

app.post('/api/v1/signin',async (req,res)=>{
    try {
        const {userName,password} = req.body;
        console.log(userName,password);
        const user = await User.findOne({userName:userName});
        console.log(user);
        if(!user){
            res.status(403).json({
                message: "Wrong username"
            })
            return;
        }
        if(user.password !== password){
            res.status(403).json({
                message: "wrong password"
            })
            return;
        }

        const jwtToken = jwt.sign({
            userId: user._id,
            name: user.userName,
        },jwt_secreat);

         res.status(200).json({
            token:jwtToken,
            message:"SuccessFully login",
        })
        return 
    } catch (error) {
        res.status(500).json({
            message:"Internal server issue in signin controller"
        })
        return;
    }

})
app.post('/api/v1/addContent',authRoute,async (req,res)=>{
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if(!user){
            res.status(403).json({
                message: "User is not present"
            })
            return;
        }
        const {type,link,title,tags} = req.body;
        if(!title){
            res.status(402).json({
                message: "Title is required",
            })
            return;
        }
        let tag = await Tag.findOne({tag:tags});
        if(!tag){
          tag =  await Tag.create({tag:tags});
        }
        const content = {type:type,link,title:title,tags:tag._id, userId};
        const newContent  = await Content.create(content);

        res.status(200).json({
            message:"Content is Succesfully created",
            content: content,
        })
        return;


    } catch (error) {
        res.status(500).json({
            message:"Internal server error Error in addContentRoute"
        })
        return;
    }

})  
app.get('/api/v1/getContent',authRoute,async (req,res)=>{
        try {
            const userId = req.userId;
            const user = await User.findById(userId);
            if(!user){
                 res.status(403).json({
                    message:"user is not present",
                })
                return;
            }
            const content = await Content.find({userId:userId});

            res.status(200).json({
                message: "content fetched successfully",
                content
            })
            return;
            
        } catch (error) {
            res.status(500).json({
                message: "Internal server error in getContent route",
            })
            return;
        }
})  

app.delete('/api/v1/deleteContent',authRoute,async (req,res)=>{
    try {   
            const contentId = req.body.contentId;
            await Content.findByIdAndDelete(contentId);
            res.status(200).json({
                message:"content is successfully deleted",
            })
            return;
        } catch (error) {
             res.status(500).json({
                message: "Internal server error in getContent route",
                error
            })
            return;
        }
})

// app.get("/api/v1/brain/:shareLink",authRoute,async(req,res)=>{
//     try {
//         const contentId  = req.body.contentId;

        
//     } catch (error) {
        
//     }
// })



app.listen(3000,()=>{
    console.log("app is running at port no. 3000")
})

connectDb();