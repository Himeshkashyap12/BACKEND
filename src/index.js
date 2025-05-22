import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path:"./env"
})

connectDB()
        .then(()=>{
          app.listen(process.env.PORT || 8000,()=>{
            console.log(`server is running at port: ${process.env.PORT}`);
            
          })
        })
        .catch((err)=>{console.log("MONGODB connection failed",err);
        });





























// (async()=>{
//      try {
//       const connectionInstance=await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       console.log(connectionInstance);
      
//       app.on("error",(error)=>{
//         console.log("error",error);
//         throw error  ;
        
//       })
//       app.listen(process.env.PORT,()=>{
//       console.log(`App is listning on port ${process.env.PORT}`);
      
//       })
//      } catch (error) {
//         console.error(error);
//         throw error;
        
//      }
// })() 