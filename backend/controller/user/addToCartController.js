import AddToCard from "../../models/cartProduct.js";

const addToCartController = async (req, res) => {
    try {
      const { productId } = req?.body;
      const currentUser = req.user.id;

      const isProductAvailable = await AddToCard.findOne({
        productId,
        userId: currentUser,
      });

      //console.log("isProductAvailabl   ", isProductAvailable);

      if (isProductAvailable) {
        return res.json({
          message: "Already exits in Add to cart",
          success: false,
          error: true,
        });
      }

      const payload = {
        productId: productId,
        quantity: 1,
        userId: currentUser,
      };

      const newAddToCart = new AddToCard(payload);
      const saveProduct = await newAddToCart.save();

      return res.json({
        data: saveProduct,
        message: "Product Added in Cart",
        success: true,
        error: false,
      });
    } catch (err) {
      res.json({
        message: err?.message || err,
        error: true,
        success: false,
      });
    }
};

export default addToCartController;