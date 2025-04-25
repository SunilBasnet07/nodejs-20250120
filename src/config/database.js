import mongoose from "mongoose";

const connectDB= async()=>{
     try {
        const status = await mongoose.connect("mongodb+srv://kit22fsub:basnet123@cluster1.6p4ld.mongodb.net/nodejs-20250120");
        console.log("MongoDB connected...")
     } catch (error) {
        console.log(error.message);
        process.exit(1);
     }
}

export default connectDB