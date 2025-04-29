import { formatterUserData } from "../helper/formatter.js";
import userService from "../services/userService.js";


const getAllUsers=async(req,res)=>{
  try {
    const users= await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getUserById=async(req,res)=>{
  try {
    const id = req.params.id;
    const user= await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser=async(req,res)=>{
  try {
    const user= await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUser=async(req,res)=>{
  try {
    const id = req.params.id;
    const data= req.body;
  
    const user= await userService.updateUser(id,data);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteUser=async(req,res)=>{
  try {
    const id = req.params.id;
   await userService.deleteUser(id);
    res.json(`User of this ${id} id deleted successfully.`);
  } catch (error) { 
    res.status(500).send(error.message);
  }
};

const uploadProfileImage = async(req,res)=>{
 try {
  const file = req.file;
  const userId = req.user?.id;

  const data = await userService.uploadProfileImage(userId,file);

  res.send(formatterUserData(data));
 } catch (error) {
  res.status(500).send(error.message)
 }
 
}
export {createUser,getAllUsers,getUserById,updateUser,deleteUser,uploadProfileImage}