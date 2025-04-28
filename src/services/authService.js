import User from "../models/User.js"
import bcrypt from "bcrypt"


const login = async (data) => {

    const user = await User.findOne({ email: data.email });
    const isPasswordMatched = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordMatched) {
        throw {
            statusCode: 400,
            message: "Incorrect email and password."
        }
    }

    if (!user) throw new Error("User not found.");


    return user;
}



const register = async (data) => {
    const user = await User.findOne({ email: data.email })
    if (user) throw new Error("User already exist.");

    const hashPassword = bcrypt.hashSync(data.password, 10);

    const userdata = await User.create({
        name: data.name,
        email: data.email,
        number: data.number,
        password: hashPassword,
        confirmPassword: hashPassword,
        roles:data.roles

    })

    return userdata;
}

export default { login, register };