import productService from "../services/productService.js";

const getAllProducts=(req,res)=>{
    const products= productService.getAllProducts();
    res.json(products);
};
const getProductById=(req,res)=>{
   const id = req.params.id;
   const product = productService.getProductById(id);
   if(!product) res.status(404).send("product not found");
   res.json(product);
};
const createProduct=(req,res)=>{
    const data = req.body; 
   const product= productService.createProduct(data);
  
   res.send(product);
};
const updateProduct=(req,res)=>{
    res.send("update Product");
};
const deleteProduct=(req,res)=>{
    res.send("delete product");
};
export {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct}