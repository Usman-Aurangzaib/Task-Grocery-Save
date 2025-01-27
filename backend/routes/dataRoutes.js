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

  router.delete('/api/data/categories/:id', async (req, res) => {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).send({ message: "Invalid category ID" });
    }

    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        res.status(200).send({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error deleting category", error: error.message });
    }
});

  export default router;