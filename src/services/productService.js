import fs from "fs";


const rawData = fs.readFileSync('./data/products.json','utf-8');
const products= JSON.parse(rawData);

const getAllProducts=()=>{
return products;
}

const getProductById=(id)=>{
const productId= products.find((p)=> p.id==id)
return productId;
}

const createProduct=(data)=>{
products.push(data);
fs.writeFileSync('./data/products.json',JSON.stringify(products));
return "product added successfully."
} 

export default {getAllProducts,getProductById,createProduct}