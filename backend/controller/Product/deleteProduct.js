import uploadProductPermission from "../../help/permisson.js";
import Product from "../../models/productModel.js";

const deleteProduct = async (req, res) => {
  try {
    const sessionUserId = req.userId;
   

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const productId = req.body.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      throw new Error("Product not found or already deleted");
    }

    res.status(200).json({
      message: "Product deleted successfully",
      error: false,
      success: true,
      data: deletedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};



export default deleteProduct;
