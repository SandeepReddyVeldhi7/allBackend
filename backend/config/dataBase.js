import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


const databaseConnection = () => {
  
      mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
          console.log("Connected to mongoDB");
        })
        .catch((error) => {
          console.error("Error connecting to MongoDB:", error);
        });
};

export default databaseConnection;