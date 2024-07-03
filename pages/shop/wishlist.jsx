import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Shop from "~/components/partials/shop/Shop";
import { connect } from "react-redux";
import { caculateArrayQuantity } from "~/utilities/ecomerce-helpers";
import useEcomerce from "~/hooks/useEcomerce";
import ModuleEcomerceWishlist from "~/components/ecomerce/modules/ModuleEcomerceWishlist";
import SkeletonTable from "~/components/elements/skeletons/SkeletonTable";
import { Result } from "antd";
import { client } from "~/utilities/client";

const breadcrumb = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "Shop",
        url: "/shop",
    },
    {
        text: "Wishlist",
    },
];
// cart values = []36,45,77;
const WishlistScreen = ({ ecommerce, allProducts }) => {
    console.log("WLISTTT",allProducts)
    const { loading, products, getProducts, wishlistProducts } = useEcomerce();
    
    useEffect(() => {
        if (ecommerce) {
            getProducts(ecommerce.wishlistItems, allProducts);
        }
    }, [ecommerce]);
    
    // view
    let totalView, wishListView;
    if (wishlistProducts && wishlistProducts.length > 0) {
        totalView = caculateArrayQuantity(wishlistProducts);
        wishListView = <ModuleEcomerceWishlist source={wishlistProducts} />;
    } else {
        if (loading) {
            wishListView = <SkeletonTable rows={1} />;
        } else {
            wishListView = (
                <Result status="warning" title="No product in your wishlist." />
            );
        }
    }
    
    return (
        <Container title="Wishlist">
            <div className="ps-page ps-page--inner">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">
                            Wishlist
                            {totalView ? <sup>({totalView})</sup> : ""}
                        </h1>
                    </div>
                    <div className="ps-page__content">{wishListView}</div>
                </div>
            </div>
        </Container>
    );
};
export default connect((state) => state)(WishlistScreen);

export const getServerSideProps = async () => {
    const query = '*[_type == "allProducts"]'
    const allProducts = await client.fetch(query)
    return {
        props : {
            allProducts,
        },
    }
}