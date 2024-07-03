import React, { useState, useEffect } from "react";
// import ProductRepository from "~/repositories/ProductRepository";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
    setCompareItems,
    setCartItems,
    setWishlistItems,
} from "~/store/ecommerce/action";
import { client } from "~/utilities/client";

export default function useEcomerce() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [cartItemsOnCookie] = useState(null);
    const [cookies, setCookie] = useCookies(["cart"]);
    const [products, setProducts] = useState([]);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    return {
        loading,
        cartItemsOnCookie,
        products,
        wishlistProducts,
        cartProducts,
        
        getProducts: (payload, allProducts, group = "") => {
            console.log("CCCARTTT_ITEMS",payload)
            setLoading(true);
            if (payload && payload.length > 0) {
                const idsToFind = [];
                payload.forEach(item => idsToFind.push(item.id));

                const responseData = allProducts.filter(product => idsToFind.includes(product.id));
                if (responseData && responseData.length > 0) {
                    if (group === "cart") {
                        
                        let cartItems = responseData;
                        payload.forEach((item, index) => {
                            if (item.id === cartItems[index].id) {
                                console.log(true);
                                cartItems[index].quantity = item.quantity;
                            }
                        });
                        setCartProducts(cartItems);
                    } else {
                        setWishlistProducts(responseData);
                    }
                    setTimeout(
                        function () {
                            setLoading(false);
                        }.bind(this),
                        250
                    );
                }
            } 
            else {
                setLoading(false);
                setWishlistProducts([]);
            }
        },
        increaseQty: (payload, currentCart) => {
            let cart = [];
            if (currentCart) {
                cart = currentCart;
                const existItem = cart.find((item) => item.id === payload.id);
                if (existItem) {
                    existItem.quantity = existItem.quantity + 1;
                }
                setCookie("cart", cart, { path: "/" });
                dispatch(setCartItems(cart));
            }
            return cart;
        },

        decreaseQty: (payload, currentCart) => {
            let cart = [];
            if (currentCart) {
                cart = currentCart;
                const existItem = cart.find((item) => item.id === payload.id);
                if (existItem) {
                    if (existItem.quantity > 1) {
                        existItem.quantity = existItem.quantity - 1;
                    }
                }
                setCookie("cart", cart, { path: "/" });
                dispatch(setCartItems(cart));
            }
            return cart;
        },
        // newItem means Product on which we are on
        addItem: (newItem, items, group) => {
            console.log("NEW_ITEM", newItem)
            console.log("ITEMS", items)
            console.log("GROUP", group)
            let newItems = [];
            if (items) {
                newItems = items;
                const existItem = items.find((item) => item.id === newItem.id);
                if (existItem) {
                    if (group === "cart") {
                        existItem.quantity += newItem.quantity;
                    }
                } else {
                    newItems.push(newItem);
                }
            } else {
                newItems.push(newItem);
            }
            if (group === "cart") {
                setCookie("cart", newItems, { path: "/" });
                dispatch(setWishlistItems(newItems));
            }
            if (group === "wishlist") {
                console.log("NewwwwwwItems",newItems);
                setCookie("wishlist", newItems, { path: "/" });
                dispatch(setWishlistItems(newItems));
                
                console.log("Itemmmmm",newItem);
            }

            return newItems;
        },

        removeItem: (selectedItem, items, group) => {
            let currentItems = items;
            if (currentItems.length > 0) {
                const index = currentItems.findIndex(
                    (item) => item.id === selectedItem.id
                );
                currentItems.splice(index, 1);
            }
            if (group === "cart") {
                setCookie("cart", currentItems, { path: "/" });
                dispatch(setCartItems(currentItems));
            }
            if (group === "wishlist") {
                setCookie("wishlist", currentItems, { path: "/" });
                dispatch(setWishlistItems(currentItems));
                setWishlistProducts(currentItems);
                console.log("REEM_ITEM",wishlistProducts)
            }
        },

        removeItems: (group) => {
            if (group === "wishlist") {
                setCookie("wishlist", [], { path: "/" });
                dispatch(setWishlistItems([]));
            }
            if (group === "cart") {
                setCookie("cart", [], { path: "/" });
                dispatch(setCartItems([]));
            }
        },
    };
}


