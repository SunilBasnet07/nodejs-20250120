import { ADMIN_ROLES } from "../constant/roles.js";
import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productService.getProductById(id);
  if (!product) res.status(404).send("product not found");
  res.json(product);
};
const createProduct = async (req, res) => {
  const files = req.files;
  const userId = req.user.id;
  const data = req.body;
  const product = await productService.createProduct(userId,data,files);

  res.json(product);
};
const updateProduct = async (req, res) => {

  try {
    const id = req.params.id;
    const data = req.body;
    const user= req.user;
    const files = req.files;
    const product = await productService.getProductById(id);
    if(!product) return res.send("Product not found");
    if(product.createdBy != user.id && !user.roles.includes(ADMIN_ROLES)) return res.status(403).send("Access denied");
    const updateProduct = await productService.updateProduct(id, data,files);
    res.json(updateProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productService.deleteProduct(id);
    res.send("Product deleted successfylly.")
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await productService.getCategories();
    console.log(categories);
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getCategories }