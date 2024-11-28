import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId,ref : "Users"},
    foodItems : [{
        foodId : {type: mongoose.Schema.ObjectId , ref: "Food"},
        quantity : Number,
    }],
    totalPrice : Number,
    status : {type: String, enum: ["Pending","Completed"],},    //add reference to food module
    assignedDeliveryMan : {type: mongoose.Schema.ObjectId,ref: "Users"},
    createdAt : {type: Date,default: Date.now},
});

export default mongoose.model("Orders",orderSchema);