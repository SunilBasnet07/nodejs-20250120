import express from "express";
import dotenv from "dotenv";
import productsRoute from "./routes/productsRoute.js"
import bodyParser from "body-parser"


const app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
dotenv.config();
const PORT = process.env.PORT ;

app.get("/",(req,res)=>{
  res.json({
    "name": "nodejs-20250120",
    "version": "1.0.0",
    "port":"500",
  })
})

app.use("/api/products",productsRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});