import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./src/routes/routes.js";

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use("/", routes);  

mongoose.connect(process.env.URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
