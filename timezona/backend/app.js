import express from "express"
import "dotenv/config"
import "./src/db/connection.js"
import cors from "cors"
import productRouter from "./src/routes/router.js"


const app = express()
const port = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use("/api/product" , productRouter)

app.listen(port , ()=>{
    console.log(`server is runninnnggg ${port}`);
    
})
