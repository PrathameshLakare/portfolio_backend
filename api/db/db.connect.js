const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoURI);
    if (connection) {
      console.log("Connection successfully.");
    }
  } catch (error) {
    console.log("Connection Failed", error);
  }
};

module.exports = { initializeDatabase };
