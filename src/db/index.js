import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";



const connectDB=async()=>{
console.log(process.env.MONGODB_URI);

    try{
    const connectionInstance= await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`MONGO DB CONNECTED DB HOST: ${connectionInstance.connection.host}`);   
    }catch(error){
      console.log("Mongo db connection error",error);
      process.exit(1);
      
    }
}
export default connectDB;  