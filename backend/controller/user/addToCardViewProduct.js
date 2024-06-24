import AddToCard from "../../models/cartProduct.js";

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.user.id;
   // console.log("Current User:", currentUser); // Log current user ID

    const allProduct = await AddToCard.find({
      userId: currentUser,
    }).populate("productId");

    console.log("Current User:", allProduct); // Log current user ID
               if (allProduct.length === 0) {
                 console.log("No products found for user:", currentUser);
    }
    
    res.json({
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default addToCartViewProduct
