import { User } from "../../models/userModel.js"

export const allUser =async (req, res) => {
    try {
        

        const allUsers = await User.find()
        
        res.json({
            message : "All User ",
            data : allUsers,
            success : true,
            error : false
        })
    } catch(error) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}