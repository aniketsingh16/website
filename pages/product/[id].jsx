import React, { useEffect, useState } from "react";
import { client, urlFor } from "~/utilities/client";
import Router, { useRouter } from "next/router";
// import ProductRepository from "~/repositories/ProductRepository";
import SkeletonProductDetail from "~/components/elements/skeletons/SkeletonProductDetail";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Container from "~/components/layouts/Container";

import WidgetProductPromotion from "~/components/shared/widgets/WidgetProductPromotion";
import DetailDefault from "~/components/elements/detail/DetailDefault";
import WidgetShopRelatedProducts from "~/components/shared/widgets/WidgetShopRelatedProducts";
import WidgetShopPromotion from "~/components/shared/widgets/WidgetShopPromotion";
import CustomerBought from "~/components/partials/products/CustomerBought";
import useGetProducts from "~/hooks/useGetProducts";
import { Image } from "antd";
import Rating from "~/components/elements/Rating";


const ProductDetailPage = ({ product, similarProducts }) => {
  
    const { image, item } = product;
    console.log(product)
    const Router = useRouter();
    const { id } = Router.query;
    // console.log("Single Product",product)
    console.log("Similar Product",similarProducts)
    console.log("SSLLugg: " ,id)
    // const { loading, product, getProductById } = useGetProducts();

    // useEffect(() => {
    //     if (id) {
    //         console.log("ID enered is", id)
    //         getProductById(id);
    //     }
    // }, [id]);

    // // View area
    let productView;

    if (product === null) {
        productView = (
            <div className="container">
                <SkeletonProductDetail />
            </div>
        );
    } else {
        // Yaha product aana chiaye so that it can be passed as a prop fro detaled view.
        productView = <DetailDefault product={product} />;
    }
    const breadcrumb = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },
        {
            id: 2,
            text: "Shop",
            url: "/shop",
        },
        {
            id: 3,
            text: `${product.item}`,
        },
    ];
    return (
      // <Container title="Product">
      //   <div>
          
      //     Hello
      //     <div className="image-container">
      //       <br></br>
      //       <br></br>
      //       <h3> {product.item} </h3>
      //       <p> {product.company}</p>
      //       <h4> ₹ {product.price}</h4>
      //       <Rating value={product.rating} />
      //       <Image src={urlFor(product.imageurl)} height={300}/>
      //       <h3>  </h3>
      //     {/* <img src={urlFor(product.imageurl)} className="product-detail-image" /> */}
      //   </div>
      // </div>
      // </Container>
        
        // Single Page Item Details
        <Container title="Product">
            <div className="ps-page ps-page--product">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-layout--with-sidebar ps-reverse">
                            <div className="ps-layout__left">
                                <WidgetProductPromotion />
                                <WidgetShopRelatedProducts />
                                <WidgetShopPromotion />
                            </div>
                            <div className="ps-layout__right">
                                {productView}
                            </div>
                        </div>
                    </div>
                </div>
                <CustomerBought similarProducts = {similarProducts}/>
            </div>
        </Container>
    );
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
    const query = `*[_type == "allProducts"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
    console.log(products)
  
    const paths = products.map((product) => ({
      params: { 
        id: product.id?.current || 'default-slug'
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  

export const getStaticProps = async ({ params: { id }}) => {
  // console.log("SLUGGGG",slug)
    const query = `*[_type == "allProducts"  && id == ${id}][0]`;
    const productsQuery = '*[_type == "allProducts"]'
  
    const product = await client.fetch(query)
    const similarProducts = await client.fetch(productsQuery)
    console.log("Single Product getstatic: ", product)
    return {
        props : {
            product,
            similarProducts
        },
    }
}
