import express from "express";
import connectDB from"./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dataRoutes from "./routes/dataRoutes.js"
import cors from "cors";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
