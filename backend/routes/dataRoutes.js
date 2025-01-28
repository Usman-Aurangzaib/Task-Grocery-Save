import express from"express";
import mongoose from 'mongoose'

import Category from"../models/Category.js";

const router = express.Router();


router.post("/categories", async (req, res) => {
    const { name } = req.body;
    const category = new Category({ name, items: [] });
    await category.save();
    res.status(201).send(category);
  });
  
  router.get("/categories", async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
  });
  
  router.post("/categories/:id/items", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid category ID" });
      }
    
    const { name, items } = req.body;
    const category = await Category.findById(id);
    category.items.push({
        name: name, // List title
        items: items, 
      });
    
      await category.save();
    
      // Send back the updated category
      res.send(category);
  });
  
  router.delete("/categories/:id/items/:itemId", async (req, res) => {
    const { id, itemId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(itemId)) {
      return res.status(400).send({ message: "Invalid ID(s)" });
    }
  
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
  
    category.items = category.items.filter((item) => item._id.toString() !== itemId);
    await category.save();
    res.send(category);
  });


// Delete category
router.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid category ID" });
    }

    const deletedCategory = await Category.findByIdAndDelete(id);
    
    if (!deletedCategory) {
      return res.status(404).send({ message: "Category not found" });
    }

    res.send(deletedCategory);
  } catch (error) {
    res.status(500).send({ message: "Error deleting category", error: error.message });
  }
});

  export default router;