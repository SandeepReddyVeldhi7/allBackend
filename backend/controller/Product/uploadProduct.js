
import  Product  from "../../models/productModel.js"
import uploadProductPermission from '../../help/permisson.js';
 
 const uploadProduct = async(req,res) => {
     try {
            const sessionUserId = req.userId;
       
         
            if (!uploadProductPermission(sessionUserId)) {
              throw new Error("Permission denied");
            }

            const uploadProduct = new Product(req.body);
            const saveProduct = await uploadProduct.save();

            res.status(201).json({
              message: "Product upload successfully",
              error: false,
              success: true,
              data: saveProduct,
            });
     } catch (error) {
         res.status(400).json({
             message: error.message,
             error: true,
             success:false
         })
   }
 }
 
 export default uploadProduct