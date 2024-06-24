
import  Product  from "../../models/productModel.js"
const getProduct = async (req, res) => {
  try {
    const allProduct = await Product.find().sort({ createdAt: -1 });

    res.json({
      message: "All Product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default getProduct;
