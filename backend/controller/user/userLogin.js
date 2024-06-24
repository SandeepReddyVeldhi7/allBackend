import { User } from "../../models/userModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      user_Id: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    // Token options
    const tokenOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure cookie in production
      sameSite:"None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    };

    // Set token in HTTP-only cookie
    
    return res
      .status(201)
      .cookie("token", token, tokenOption)
      .json({
        message: `welcome back ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};