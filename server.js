import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

// Error handler (should always be last middleware)
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
