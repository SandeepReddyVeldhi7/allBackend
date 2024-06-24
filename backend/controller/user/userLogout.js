
export const Logout = (req, res) => {
  try {
    const tokenOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure cookie in production
      sameSite:true,
      expires: new Date(Date.now()), // Expire the cookie immediately
    };

    // Clear the token cookie by setting an empty value and expiring it immediately
    return res.cookie("token", "", tokenOption).json({
      message: "User logged out successfully.",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};