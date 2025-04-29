import express from "express";
import dotenv from "dotenv";
import productsRoute from "./routes/productsRoute.js"
import usersRoute from "./routes/usersRoute.js"
import authRoute from "./routes/authRoute.js"
import bodyParser from "body-parser"
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import multer from "multer";
import connectCloudinary from "./config/cloudinary.js";


const app = express();
app.use(logger);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
dotenv.config();
connectDB();
connectCloudinary();
const upload = multer({ storage: multer.memoryStorage(), })
const PORT = process.env.PORT ;

app.get("/",(req,res)=>{
  res.json({
    "name": "nodejs-20250120",
    "version": "1.0.0",
    "port":"500",
  })
})

app.use("/api/products",productsRoute)
app.use("/api/users",upload.single("image"),usersRoute)
app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});