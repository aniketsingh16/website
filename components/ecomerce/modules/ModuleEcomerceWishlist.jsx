import React from "react";
import ProductOnCart from "~/components/elements/products/ProductOnCart";
import useEcomerce from "~/hooks/useEcomerce";
import { connect, useDispatch } from "react-redux";
import { toggleDrawer } from "~/redux/appSlice";
import toast, { Toaster } from 'react-hot-toast';

// source is products wishlist ya all [ALL]
const ModuleEcomerceWishlist = ({ ecommerce, source }) => {
    const { addItem, removeItem } = useEcomerce();
    const dispatch = useDispatch();

    function handleRemoveItem(e, productId, productName) {
        e.preventDefault();
        toast.success(`Item ${productName} removed from your Wishlist`);
        // setTimeout(() => {
        //     removeItem({ id: productId }, ecomerce.wishlistItems, "wishlist");    
        //     console.log("This line will be executed after 2 seconds.");
        // }, 300);
        removeItem({ id: productId }, ecommerce.wishlistItems, "wishlist");    
    }

    function handleAddItemToCart(e, product) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecommerce.cartItems, "cart");
        dispatch(toggleDrawer(true));
    }

    // View
    let wishlistItemsViews;
    if (source && source.length > 0) {
        const items = source.map((item) => (
            <tr key={item.id}>
                {/* // X button */}
                <td>
                    <a
                        className="ps-icon ps-cart-item__remove"
                        href="#"
                        onClick={(e) => handleRemoveItem(e, item.id, item.item)}>
                        <i className="icon-cross mr-2"></i>
                    </a>
                    <Toaster />
                </td>
                <td>
                    <ProductOnCart product={item} simple={true} />
                </td>
                <td>
                    <strong>₹{item.price}</strong>
                </td>
                <td>
                    <div className="ps-status instock">
                        <i className="fa fa-check mr-2"></i>
                        In Stock
                    </div>
                </td>
                <td>
                    <a
                        className="ps-btn ps-btn--orange ps-btn--sm"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e, item)}>
                        Add to cart
                    </a>
                </td>
            </tr>
        ));
        wishlistItemsViews = <tbody>{items}</tbody>;
    } else {
        wishlistItemsViews = (
            <tbody>
                <tr>
                    <td colSpan={5} className="text-left">
                        No product found.
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <table
            className="table ps-table ps-table--with-border ps-table--resonsive"
            id="table-wishlist">
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock status</th>
                    <th></th>
                </tr>
            </thead>
            {wishlistItemsViews}
        </table>
    );
};

export default connect((state) => state)(ModuleEcomerceWishlist);
