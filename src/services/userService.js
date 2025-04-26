import User from "../models/User.js"


const getAllUsers=async()=>{
    return await User.find();
   }
const getUserById=async(id)=>{
    return await User.findById(id);
   }
const createUser=async(data)=>{
 return await User.create(data);
}
const updateUser = async(id,data)=>{
    return await User.findByIdAndUpdate(id,data);
}
const deleteUser = async(id)=>{
    return await User.findByIdAndDelete(id);
}

export default {createUser,getAllUsers,getUserById,updateUser,deleteUser}