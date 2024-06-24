import { User } from "../../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
  try {
    const { name, email, password, profilePic } = req.body;
    //basic validation
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "user already exist",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    const payload = {
      name,
      email,
      role: "GENERAL",
      password: hashedPassword,
      profilePic: profilePic || "",
    };
      const newUser = new User(payload);
    const savedUser = await newUser.save();

    return res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error.",
      success: false,
    });
  }
};
