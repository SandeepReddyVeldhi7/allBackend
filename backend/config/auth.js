import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../config/.env",
});

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Please Login...",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decode);

    req.user = { id: decode.user_Id };
    next();

  } catch (error) {
      return res.status(401).json({
      message: "Please Login...",
      success: false,
    });
  }
};
export default isAuthenticated;
