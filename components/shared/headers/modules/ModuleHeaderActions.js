import React, { useEffect, useState } from "react";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch, connect, useSelector } from "react-redux";
import Link from "next/link";
import {
    caculateArrayQuantity,
    calculateCartQuantity,
} from "~/utilities/ecomerce-helpers";
// import DrawerPrimary from "../../drawers/DrawerPrimary";
// import { toggleDrawerSuccess } from "~/redux/appSlice";
// import { toggleDrawer } from "~/redux/appSlice";

const ModuleHeaderActions = ({ ecommerce, search = false, products }) => {
    // const wishlistItems = useSelector(state => state.ecommerce.wishlistItems);
    // const cartItems = useSelector(state => state.ecommerce.cartItems);
    // const toggleDrawer = useSelector(state => state.app.isDrawerShow);
    // console.log("togggggle",toggleDrawer)
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [wishlistTotal, setWishlistTotal] = useState(0);

    console.log("CCCCCCTTTTTTTTTTT",cartTotal)
    function handleOpenDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(true));
    }
    useEffect(() => {
        if (ecommerce.cartItems) {
            console.log("EECOMM cart items", ecommerce.cartItems)
            setCartTotal(calculateCartQuantity(ecommerce.cartItems));
        }
        if (ecommerce.wishlistItems) {
            setWishlistTotal(caculateArrayQuantity(ecommerce.wishlistItems));
        }
    }, [dispatch]);

    // view
    let searchBtnView;
    if (search) {
        searchBtnView = (
            <li>
                <a className="header__action" href="#">
                    <i className="icon-magnifier"></i>
                </a>
            </li>
        );
    }

    return (
        <>
        <p className="welcome_user"> Hi, User</p>
        <ul className="header__actions">
            {searchBtnView}
            <li>
                <Link href="/my-account" legacyBehavior>
                    <a className="header__action">
                        <i className="icon-user"></i>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/shop/wishlist" legacyBehavior>
                    <a className="header__action">
                        <i className="fa fa-heart-o"></i>
                        <span className="header__action-badge">
                            {wishlistTotal ? wishlistTotal : 0}
                        </span>
                    </a>
                </Link>
            </li>
            <li>
                <a
                    className="header__action"
                    // href="/shop/shopping-cart"
                    id="cart-mini"
                    onClick={(e) => handleOpenDrawer(e)}
                    >
                    <i className="icon-cart-empty"></i>
                    <span className="header__action-badge">
                        {cartTotal ? cartTotal : 0}
                    </span>
                </a>
                {/* <DrawerPrimary products = {products}/> */}
                {/* <button onClick={() => handleClick()}> <i className="icon-cart-empty"></i></button> */}
            </li>
        </ul>
        </>
        
    );
};

export default connect((state) => state)(ModuleHeaderActions);
// export default ModuleHeaderActions;