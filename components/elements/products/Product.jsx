// import React from "react";
// import Link from "next/link";
// import ModuleProductActions from "~/components/elements/products/modules/ModuleProductActions";
// import useProduct from "~/hooks/useProduct";
// // import ModuleProductRating from "~/components/elements/products/modules/ModuleProductRating";
// import ModuleProductImages from "~/components/elements/products/modules/ModuleProductImages";

// const Product = ({ product }) => {
//     const { price, badges } = useProduct();

//     return (
//         <div className="ps-product ps-product--grid">
//             <div className="ps-product__thumbnail">
//                 <Link href="/product/[id]" as={`/product/${product.id}`}>
//                     <a className="ps-product__overlay"></a>
//                 </Link>
//                 <ModuleProductImages product={product} />
//                 <ModuleProductActions product={product} />
//                 {/* {badges(product)} */}
//             </div>
//             <div className="ps-product__content">
//                 <h4 className="ps-product__title">
//                     <Link href="/product/[id]" as={`/product/${product.id}`}>
//                         <a>{product.item}</a>
//                     </Link>
//                 </h4>
//                 Rs. {product.price}
//                 {/* {price(product)} */}
//                 {/* <ModuleProductRating /> */}
//             </div>
//         </div>
//     );
// };

// export default Product;

import React, {useState, useEffect} from "react";
import Link from "next/link";
import ModuleProductActions from "../products/modules/ModuleProductActions";
import useProduct from "../../../hooks/useProduct";
import ModuleProductRating from "~/components/elements/products/modules/ModuleProductRating";
import ModuleProductImages from "../products/modules/ModuleProductImages";
import  client  from "../../../utilities/client";

const Product = ({ product }) => {
    console.log("Price ", product.price)
    const { price, badges } = useProduct();
    
    return (
        <div className="ps-product ps-product--grid">
            <div className="ps-product__thumbnail">
                <Link href="/product/[id]" as={`/product/${product.id}`} legacyBehavior>
                    <a className="ps-product__overlay"></a>
                </Link>
                <ModuleProductImages product={product} />
                <ModuleProductActions product={product} />
                {/* {badges(product)}  */}
                {/* {console.log(badges(product))} */}
            </div>
            <div className="ps-product__content">
                <h4 className="ps-product__title">
                    <Link href="/product/[id]" as={`/product/${product.id}`} legacyBehavior>
                        <a>{product.item}</a>
                    </Link>
                </h4>
                {/* Rs.{product.price} */}
                {price(product)}
                <ModuleProductRating value = {product.rating} />
            </div>
        </div>
    );
};

export default Product;
