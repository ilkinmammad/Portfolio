import mongoose from "mongoose";

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connect MONGOO ");
    
}).catch(()=>{
    console.log("Dissconnect MONGOO ");
    
})