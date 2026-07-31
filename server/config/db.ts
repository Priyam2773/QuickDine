import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    mongoose.connection.on("error", (err) => {
        console.error("MongoDB Connection Error:", err);
    });
    await mongoose.connect(process.env.MONGO_URI!);
}

export default connectDB;