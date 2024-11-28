import mongoose, { model } from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: '../.env'});

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("Connected Sucessfully to Database...");
    }catch(error){
        console.log(`Unable to connect to database as ${error}`);
    }
};

export default connectDB;