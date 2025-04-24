import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
  res.json({
    "name": "nodejs-20250120",
    "version": "1.0.0",
    "port":"500",
  })
})
app.get("/about",(req,res)=>{
    res.send("This is about page")
})
app.get("/products",(req,res)=>{
res.send("Products");
})
app.get("/products/:id",(req,res)=>{
    const id= req.params.id;
    res.send(`Product of Id : ${id}`);
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});