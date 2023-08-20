const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();


const app = express();
const databaseUrl = process.env.DATABASE_URL;


// middleware
app.use(cors());
app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use(authRoutes);

// Database connection
async function connectToDatabase() {
  try {
    await mongoose.connect(`${databaseUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Start server after connecting to the database
connectToDatabase().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
