
import Product from "../models/Product.js";
import uploadfile from "../utils/file.js";



const getAllProducts= async()=>{
return await Product.find({});
}


const getProductById= async (id)=>{
return await Product.findById(id);
}
const getCategories = async ()=>{
    return await Product.distinct("category");
 }

const createProduct= async(userId,data,files)=>{
    const uploadFiles= await uploadfile(files);
    return await Product.create({...data,createdBy:userId,imageUrls:uploadFiles.map((item)=>item.url)});

} 
const updateProduct = async (id,data,files)=>{
    const uploadFiles =await uploadfile(files);
    

   return await Product.findByIdAndUpdate(id,{...data,imageUrls:uploadFiles.map((item)=>item.url)},{new:true});
}
const deleteProduct = async (id)=>{
    return await Product.findByIdAndDelete(id);
 }


export default {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,getCategories}