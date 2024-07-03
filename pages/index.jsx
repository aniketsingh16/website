import React from "react";
import Container from "~/components/layouts/Container";
import FeaturedProducts from "~/components/shared/sections/FeaturedProducts";
import BestDealOfWeek from "~/components/partials/homepages/sections/BestDealOfWeek";
import TopSellers from "~/components/partials/homepages/sections/TopSellers";
import Subscribe from "~/components/shared/sections/Subscribe";
import FollowInstagram from "~/components/shared/sections/FollowInstagram";
import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";
import PopularCategories from "~/components/partials/homepages/sections/PopularCategories";
import HomeOnePromotions from "~/components/partials/homepages/home-1/HomeOnePromotions";
import HomeOneTopBanners from "~/components/partials/homepages/home-1/HomeOneTopBanners";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import HomeOnePromotionsTwo from "~/components/partials/homepages/home-1/HomeOnePromotionsTwo";
import Testimonials from "~/components/shared/sections/Testimonials";
import HeaderDefault from "~/components/shared/headers/HeaderDefault";
import { client } from "../utilities/client";
// import HeaderSix from "~/components/shared/headers/HeaderSix";

const HomeDefaultPage = ({products, testimonials, featuredProducts, categoryProducts, enquiries}) => {
    
    console.log('Featured Products', featuredProducts)
    console.log(enquiries)
    return (
        //main-content
        <Container
            title="Healthfirst Medicorp"
            header={<HeaderDefault classes="without-border" products = {products} />}
            >
            <main id="homepage-one">
                 <HomeOneTopBanners />
                <HomeOnePromotions />
                {/* <PopularCategories /> */}
                <LatestProducts products={products}/>
                <div className="container">
                    <PromotionSecureInformation />
                </div>
                <BestDealOfWeek />
                <TopSellers categoriesProducts = {categoryProducts}/>
                <HomeOnePromotionsTwo />
                <FeaturedProducts pdct={featuredProducts}/>
                <Testimonials testimonials={testimonials} />
                <FollowInstagram />
                <Subscribe />
            </main>
        </Container>
    );
};

export default HomeDefaultPage;

export const getServerSideProps = async () => {
    const query = '*[_type == "allProducts"]'
    const query2 = '*[_type == "reviews"]'
    const query3 = '*[_type == "allProducts" && featured == true]'
    const query4 = '*[_type == "allProducts"]{id,item, price,imageurl, category->{name},rating,company,description}'
    const query5 = '*[_type == "contact"]';

    const products = await client.fetch(query)
    const testimonials = await client.fetch(query2)
    const featuredProducts = await client.fetch(query3)
    const categoryProducts = await client.fetch(query4)
    const enquiries = await client.fetch(query5)
    console.log("Dataa: ", featuredProducts)
    return {
        props : {
            products,
            testimonials,
            featuredProducts,
            categoryProducts,
            enquiries
        },
    }
}