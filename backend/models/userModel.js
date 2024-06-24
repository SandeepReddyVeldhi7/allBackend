import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String
    },
    role:{
     type:String
    },
  },
  { timestamps: true }
);

export const User= mongoose.model("User",userSchema)