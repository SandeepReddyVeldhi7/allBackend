import AddToCard from "../../models/cartProduct.js";

const updateAddToCartProduct = async (req, res) => {
    try {
        const currentUserId = req.user.id;
        const addToCartProductId = req?.body?._id;

        const qty = req.body.quantity;

        const updateProduct = await AddToCard.updateOne(
            { _id: addToCartProductId },
            {
                ...(qty && { quantity: qty }),
            }
        );

        res.json({
            message: "Product Updated",
            data: updateProduct,
            error: false,
            success: true,
        });
    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false,
        });
    }
};
export default updateAddToCartProduct;
