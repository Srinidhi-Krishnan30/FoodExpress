import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: String,
    description : String,
    price: String,
    category: String,
});

export default mongoose.model("Food",foodSchema);