import React, { useEffect } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Shop from "~/components/partials/shop/Shop";
import Link from "next/link";
import ModuleEcomerceCartItems from "~/components/ecomerce/modules/ModuleEcomerceCartItems";
import ModuleEcomerceCartSummary from "~/components/ecomerce/modules/ModuleEcomerceCartSummary";
import { connect } from "react-redux";
import { calculateCartQuantity } from "~/utilities/ecomerce-helpers";
import useEcomerce from "~/hooks/useEcomerce";
import { Result } from "antd";
import SkeletonTable from "~/components/elements/skeletons/SkeletonTable";
import { client } from "~/utilities/client";

const breadcrumb = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "Shop",
        url: "/shopping",
    },
    {
        text: "Shopping cart",
    },
];

const ShoppingCart = ({ ecommerce, allProducts }) => {
    const { loading, cartProducts, getProducts } = useEcomerce();
    console.log("cartProducts",cartProducts)
    console.log("cart Item & qty",ecommerce.cartItems)
    useEffect(() => {
        if (ecommerce.cartItems) {
            getProducts(ecommerce.cartItems, allProducts, "cart");
        }
    }, [ecommerce]);

    // Views
    let cartContentView, totalView;
    if (cartProducts && cartProducts.length > 0) {
        totalView = calculateCartQuantity(cartProducts);
        cartContentView = (
            <>
                <div className="ps-cart--primary">
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            <ModuleEcomerceCartItems cartItems={cartProducts} />
                        </div>
                        <div className="ps-cart__actions">
                            <div className="ps-cart__link">
                                <Link href="/shop" legacyBehavior>
                                    <a className="ps-btn ps-btn--orange">
                                        Back to shop
                                    </a>
                                </Link>
                            </div>
                            <div className="ps-cart__coupon">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your coupon"
                                />
                                <button className="ps-btn ps-btn--primary">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ps-cart__order-summary">
                        <ModuleEcomerceCartSummary cartItems={cartProducts} />
                    </div>
                </div>
            </>
        );
    } else {
        if (loading) {
            cartContentView = (
                <div className="ps-cart--primary">
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            <SkeletonTable rows={2} />
                        </div>
                    </div>
                    <div className="ps-cart__order-summary">
                        <ModuleEcomerceCartSummary />
                    </div>
                </div>
            );
        } else {
            cartContentView = (
                <Result status="warning" title="No product in cart." />
            );
        }
    }

    return (
        <Container title="Shopping Cart">
            <div className="ps-page ps-page--shopping">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">
                            Shopping cart
                            {totalView ? <sup>({totalView})</sup> : ""}
                        </h1>
                    </div>
                    <div className="ps-page__content">{cartContentView}</div>
                </div>
            </div>
        </Container>
    );
};
export default connect((state) => state)(ShoppingCart);

export const getServerSideProps = async () => {
    const query = '*[_type == "allProducts"]'
    const allProducts = await client.fetch(query)
    return {
        props : {
            allProducts,
        },
    }
}
