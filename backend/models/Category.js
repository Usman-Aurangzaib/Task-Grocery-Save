import mongoose from "mongoose";


const CategorySchema = new mongoose.Schema({
    name: String,  // Category name
    items: [
      {
        name: String,  // List title
        items: [{ name: String, completed: Boolean }]  // List items (name, completed)
      }
    ],
  });

export default mongoose.model("Category", CategorySchema)