import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
const app=express();
(async()=>{
     try {
      const connectionInstance=await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(connectionInstance);
      
      app.on("error",(error)=>{
        console.log("error",error);
        throw error  ;
        
      })
      app.listen(process.env.PORT,()=>{
      console.log(`App is listning on port ${process.env.PORT}`);
      
      })
     } catch (error) {
        console.error(error);
        throw error;
        
     }
})()