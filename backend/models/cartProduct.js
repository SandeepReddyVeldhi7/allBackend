import mongoose from "mongoose";

const addToCart = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    userId: {
      type: String,
      required: true, // Ensure userId is required
    },
  },
  {
    timestamps: true,
  }
);

  const AddToCard = mongoose.model("AddToCard", addToCart);
export default AddToCard;