import React, { useEffect, useContext } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Shop from "~/components/partials/shop/Shop";
import SidebarShop from "~/components/shared/sidebar/SidebarShop";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import ShopBestSellers from "~/components/partials/shop/ShopBestSellers";
import { useRouter } from "next/router";
import { client } from "~/utilities/client";
import ProductsContext from "~/utilities/ProductContext";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Aniket Singh",
    },
];

const ShopScreen = ({ allProducts }) => {
    // WORKING, but need tp destructure prodcuts + maintain consistency
    const produkt = useContext(ProductsContext);
    console.log("HARAMI",produkt)
    const { loading, productItems, getProducts } = useGetProducts();
    const { withGrid, withList } = useProductGroup();
    const Router = useRouter();
    const { query } = Router;
    let products = "";

    // useEffect(() => {
    //     const queries = {
    //         _limit: 24,
    //     };
    //     getProducts(queries);
    // }, []);

    if (allProducts && allProducts.length > 0) {
        if (query) {
            if (query.layout === "list") {
                products = withList(allProducts, loading, 4);
            } else if (query.layout === "grid") {
                products = withGrid(allProducts, loading, 4);
                switch (query.columns) {
                    case "2":
                        products = withGrid(allProducts, loading, 2);
                        break;
                    case "3":
                        products = withGrid(allProducts, loading, 3);
                        break;
                    default:
                        products = withGrid(allProducts, loading, 4);
                        break;
                }
            } else {
                products = withGrid(allProducts, loading, 4);
            }
        } else {
            products = withGrid(allProducts, loading, 4);
        }
    }

    return (
        <Container title="Shop">
            <div className="ps-page ps-page--shopping">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">
                            Shop
                            <sup>
                                (
                                {allProducts && allProducts.length > 0
                                    ? allProducts.length
                                    : 0}
                                )
                            </sup>
                        </h1>
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-layout--with-sidebar">
                            <div className="ps-layout__left">
                                <SidebarShop />
                            </div>
                            <div className="ps-layout__right">
                                <ShopBestSellers bestsellers = {allProducts} />
                                <Shop classes="ps-shop--grid">{products}</Shop>
                                <PromotionSecureInformation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ShopScreen;

export const getStaticProps = async () => {
      const query = '*[_type == "allProducts"]'

      const allProducts = await client.fetch(query)
      return {
          props : {
            allProducts
          },
      }
  }
