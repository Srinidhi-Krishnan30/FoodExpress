// The file contains schema for the role and related details
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name : String,
    email: String,
    passwd : String,
    role : {
        type : String, enum : ["User","Admin","DeliveryMan"], default: "User",
    }

});