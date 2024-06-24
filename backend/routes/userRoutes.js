import express from "express";
import { Register } from "../controller/user/userRegister.js";
import { Login } from "../controller/user/userLogin.js";
import { Logout } from "../controller/user/userLogout.js";
import { userDetails } from "../controller/user/userDetails.js";
import isAuthenticated from "../config/auth.js";
import { allUser } from "../controller/user/allUser.js";
import updateUser from "../controller/user/updateUser.js";
import uploadProduct from "../controller/Product/uploadProduct.js"
import updateProduct from "../controller/user/updateProduct.js";
import getCategoryProduct from "../controller/Product/getCategoryProduct.js";
import getCategoryWiseProduct from "../controller/Product/getCategoryWiseProduct.js";
import addToCartController from "../controller/user/addToCartController.js";
import getProductDetails from "../controller/Product/getProductDetails.js";
import countAddToCartProduct from "../controller/user/countAddToCartProduct.js";
import addToCartViewProduct from "../controller/user/addToCardViewProduct.js";
import updateAddToCartProduct from "../controller/user/UpdateAddToCartProduct.js";
import deleteAddToCartProduct from "../controller/user/deleteAddToCartProduct.js";
import searchProduct from "../controller/Product/searchProduct.js";
import deleteProduct from "../controller/Product/deleteProduct.js";
import getProduct from "../controller/Product/getProduct.js";


const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/user-details", isAuthenticated, userDetails);

//admin panel
router.get("/all-user", isAuthenticated, allUser);
router.post("/update-user", isAuthenticated, updateUser);

//admin access
router.put("/update-product", isAuthenticated, updateProduct);
router.delete("/delete-product", isAuthenticated, deleteProduct);
router.post("/add-products", isAuthenticated, uploadProduct);
//product
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.get("/get-product", getProduct);
           
//user add to cart
router.post("/addtocart", isAuthenticated, addToCartController)
router.get("/countAddToCartProduct", isAuthenticated, countAddToCartProduct);
router.get("/view-card-product", isAuthenticated, addToCartViewProduct);
router.post("/update-cart-product", isAuthenticated, updateAddToCartProduct);
router.delete("/delete-cart-product", isAuthenticated, deleteAddToCartProduct);
export default router;
