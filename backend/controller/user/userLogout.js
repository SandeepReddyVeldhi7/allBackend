
export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now())}).json({
    message: "user logged out successfully.",
    success: true,
  });
};
