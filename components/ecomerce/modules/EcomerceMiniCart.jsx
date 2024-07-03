import React, { useEffect, useState, useContext } from "react"
import { connect, useDispatch } from "react-redux";
import {
    calculateCartQuantity,
    calculateAmount,
} from "~/utilities/ecomerce-helpers";
import ProductOnCart from "~/components/elements/products/ProductOnCart";
import { Alert } from "antd";
import Link from "next/link";
// import { toggleDrawer } from "~/redux/appSaga";
// toggleDrawer
import useEcomerce from "~/hooks/useEcomerce";
import { toggleDrawer } from "~/store/app/action";
import ProductsContext from "~/utilities/ProductContext";

const EcomerceMiniCart = ({ ecommerce }) => {
    const { products } = useContext(ProductsContext);
    console.log("BHENKELODE", products)
    const { cartProducts, removeItem, removeItems, getProducts } = useEcomerce();
    const dispatch = useDispatch();
    console.log("cart-items: ", cartProducts)
    console.log("ecomm-cartItems",ecommerce.cartItems)

    function handleRemoveItem(e, productId) {
        e.preventDefault();
        removeItem({ id: productId }, ecommerce.cartItems, "cart");
    }

    function handleCloseDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(false));
        
    }

    function handleRemoveCart(e) {
        e.preventDefault();
        removeItems("cart");
    }
    useEffect(() => {
        getProducts(ecommerce.cartItems, products, "cart");
    }, [ecommerce]);

    // View
    let cartItemsView, cartActionsView, cartQuantityView, cartAmountView;

    if (ecommerce.cartItems) {
        if (ecommerce.cartItems.length > 0) {
            cartAmountView = calculateAmount(cartProducts);
            cartQuantityView = calculateCartQuantity(cartProducts);
            const items = cartProducts.map((item) => (
                <div className="ps-cart__item" key={item.id}>
                    <ProductOnCart product={item}>
                        <p className="ps-product__meta">
                            <span>{item.quantity} x item</span>
                            <a
                                href="#"
                                className="ps-product__remove-item"
                                onClick={(e) => handleRemoveItem(e, item.id)}>
                                <strong>Remove </strong>
                            </a>
                        </p>
                    </ProductOnCart>
                </div>
            ));
            cartItemsView = <div className="ps-cart__items">{items}</div>;
            cartActionsView = (
                <>
                    <div className="ps-cart__summary">
                        <div className="ps-cart__total">
                            <h4>
                                Total: <strong>₹{cartAmountView}</strong>
                            </h4>
                        </div>
                        <div className="ps-cart__clear-cart">
                            <a
                                href="#"
                                className="ps-btn ps-btn--sm ps-btn--outline"
                                onClick={(e) => handleRemoveCart(e)}>
                                Clear all items
                            </a>
                        </div>
                    </div>
                    <div className="ps-cart__actions">
                        <Link href="/shop/shopping-cart" legacyBehavior>
                            <a className="ps-btn ps-btn--primary">View Cart</a>
                        </Link>
                        <Link href="/shop/checkout" legacyBehavior>
                            <a className="ps-btn ps-btn--orange">Checkout</a>
                        </Link>
                    </div>
                </>
            );
        } else {
            cartItemsView = (
                <div className="ps-cart__items">
                    <Alert message="Cart empty!" type="warning" />
                </div>
            );
            cartActionsView = (
                <>
                    <a
                        href="/shop"
                        className="ps-btn ps-btn--primary"
                        onClick={(e) => handleCloseDrawer(e)}>
                        Back to shop
                    </a>
                </>
            );
        }
    }
    return (
        <div className="ps-cart--simple">
            <div className="ps-cart__header">
                <h3> 
                    Shopping Cart <sup>({cartQuantityView ? cartQuantityView : 0 })</sup>
                </h3>
            </div>
            <div className="ps-cart__content">
                {cartItemsView}
                {cartActionsView}
            </div>
        </div>
    );
};

export default connect((state) => state)(EcomerceMiniCart);