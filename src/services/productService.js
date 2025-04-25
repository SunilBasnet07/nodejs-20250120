import fs from "fs";
import Product from "../models/Product.js";



const getAllProducts= async()=>{
return await Product.find();
}

const getProductById= async (id)=>{
return await Product.findById(id);
}
const getCategories = async ()=>{
    return await Product.distinct("category");
 }

const createProduct= async(data)=>{
    return await Product.create(data);

} 
const updateProduct = async (id,data)=>{
   return await Product.findByIdAndUpdate(id,data);
}
const deleteProduct = async (id)=>{
    return await Product.findByIdAndDelete(id);
 }


export default {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,getCategories }