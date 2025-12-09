const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://tejasvinis5904_db_user:teju_59@cluster0.rsgko6x.mongodb.net/?appName=Cluster0'
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Error:", error);
  }
};
 module.exports = connectDB;