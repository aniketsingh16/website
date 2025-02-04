import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// import Lightbox from "react-image-lightbox";
// import { baseUrl } from "~/repositories/Repository";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
import { urlFor } from "~/utilities/client";

const variantSetting = {
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                dots: false,
                arrows: false,
                vertical: false,
                infinite: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                dots: false,
                arrows: false,
                vertical: false,
                infinite: false,
            },
        },
    ],
};

const gallerySetting = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const ModuleDetailThumbnail = ({ product, vertical = true }) => {
    console.log("IMAGESSS", product.images);
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [productImages, setProductImages] = useState([]);

    const handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        setPhotoIndex(imageIndex);
        setIsOpen(true);
    };

    useEffect(() => {
        let images = [];
        // if (product || product.images.length > 0) {
        //     // product.images.map((item) => {
        //     //     images.push(`${baseUrl}${item.url}`);
        //     // });
        //     // images.push(`${baseUrl}${item.url}`);
        //     images.push(product)
        //     setProductImages(images);
        // }
        if (product.images.length > 0) {
            product.images.map((item) => {
                images.push(item);
            });
            // images.push(`${baseUrl}${item.url}`);
            // images.push(product)
            setProductImages(images);
        }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product]);

    //Views
    let lightboxView, variantCarouselView, imagesView, galleryImagesView;
    if (productImages.length > 0) {
        imagesView = productImages.map((item) => (
            <div className="item" key={item._key}>
                <img src={urlFor(item).url()} alt={product.item} />
            </div>
        ));
        galleryImagesView = productImages.map((item, index) => (
            <div className="item" key={item._key}>
                {/* <a href="#" onClick={(e) => handleOpenLightbox(e, index)}> */}
                    <img src={urlFor(item).url()} alt={product.item} />
                {/* </a> */}
            </div>
        ));
    }
    if (vertical) {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                centered={false}
                arrows={false}
                slidesToShow={3}
                vertical={false}
                infinite={false}
                focusOnSelect={true}
                {...variantSetting}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    } else {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={6}
                vertical={false}
                centered={true}
                infinite={false}
                focusOnSelect={true}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    }
    if (isOpen) {
        lightboxView = (
            <h3> LIGHTBOX</h3>
        //     <Lightbox
        //         mainSrc={productImages[photoIndex]}
        //         nextSrc={productImages[(photoIndex + 1) % productImages.length]}
        //         prevSrc={
        //             productImages[
        //                 (photoIndex + productImages.length - 1) %
        //                     productImages.length
        //             ]
        //         }
        //         onCloseRequest={() => {
        //             setIsOpen(false);
        //         }}
        //         onMovePrevRequest={() => {
        //             setPhotoIndex(
        //                 (photoIndex + productImages.length - 1) %
        //                     productImages.length
        //             );
        //         }}
        //         onMoveNextRequest={() => {
        //             setPhotoIndex((photoIndex + 1) % productImages.length);
        //         }}
        //     />
        );
    }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? "true" : "false"}>
            <figure>
                <div className="ps-wrapper">
                    <Slider
                        {...gallerySetting}
                        ref={(slider) => (galleryCarousel.current = slider)}
                        asNavFor={variant}
                        className="ps-product__gallery ps-carousel inside">
                        {galleryImagesView}
                    </Slider>
                </div>
            </figure>
            {variantCarouselView}
            {/* {lightboxView} */}
        </div>
    );
};

export default ModuleDetailThumbnail;
