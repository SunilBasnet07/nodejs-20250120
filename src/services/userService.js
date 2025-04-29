import User from "../models/User.js"
import uploadfile from "../utils/file.js";


const getAllUsers = async () => {
    return await User.find();
}
const getUserById = async (id) => {
    return await User.findById(id);
}
const createUser = async (data) => {
    return await User.create(data);
}
const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data);
}
const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}
const uploadProfileImage = async (userId,file) => {
    const uploadedFile = await uploadfile(file);
    return await User.findByIdAndUpdate(userId,{
        profileImageUrl:uploadedFile?.url
    },{new:true});
}

export default { createUser, getAllUsers, getUserById, updateUser, deleteUser, uploadProfileImage }