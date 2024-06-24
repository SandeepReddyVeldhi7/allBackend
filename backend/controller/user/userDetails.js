import { User } from "../../models/userModel.js";

export const userDetails = async (req, res) => {
  try {
    //console.log("user id", req.user.id); // Correctly log the user ID

    // Fetch user details from the database
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    return res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
