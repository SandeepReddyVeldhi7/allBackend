import { User } from "../../models/userModel.js"

const updateUser = async(req,res) => {
     try{
       const sessionUser = req.user.id;

       const { userId, email, name, role } = req.body;

       // Log the request body for debugging
    //   console.log("Request Body:", req.body);

       // Validate input

       if (!userId) {
         return res.status(400).json({
           message: "User ID is required",
           error: true,
           success: false,
         });
       }

       const payload = {
         ...(email && { email: email }),
         ...(name && { name: name }),
         ...(role && { role: role }),
       };
       console.log("Payload:", payload);

       const sessionUserDetails = await User.findById(sessionUser);
          if (!sessionUserDetails) {
            return res.status(404).json({
              message: "Session user not found",
              error: true,
              success: false,
            });
          }

         console.log("Session user role:", sessionUserDetails.role);
         
       const updateUser = await User.findByIdAndUpdate(userId, payload, {
         new: true,
       });

       if (!updateUser) {
         return res.status(404).json({
           message: "User not found",
           error: true,
           success: false,
         });
       }

       res.json({
         data: updateUser,
         message: "User Updated",
         success: true,
         error: false,
       });
     } catch (err) {
         
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}
export default updateUser;