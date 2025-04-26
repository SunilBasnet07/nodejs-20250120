import mongoose from "mongoose";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constant/regex.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return EMAIL_REGEX.test(value);
            },
            message: "Please provide a valid email address"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate:{
            validator:(value)=>{
             return PASSWORD_REGEX.test(value);
            },
            message:"Password must be contain upercase lowercase and special charater"
        }

    },
    roles: {
        type: [String],
        uppercase: true,
        default: ["USER"]

    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});
const model = mongoose.model("User", userSchema);
export default model;