import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { Alert } from "antd";
const CheckoutScreen = () => {
    const breadcrumb = [
        {
            text: "Home",
            url: "/",
        },
        {
            text: "Shop",
            url: "/shopping-cart",
        },
        {
            text: "Order Success",
        },
    ];

    return (
        <Container title="Order Succe">
            <div className="ps-page ps-page--inner">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">Your Order has Been Placed Successfully!</h1>
                    </div>
                    <div className="ps-page__content">
                        <div className="row">
                            <div className="col-md-6">
                                <Alert
                                    message="Thank you. Your order has been received."
                                    description="Your order is now being processed. Your Order Id is #OD202412440"
                                    type="success"
                                    showIcon
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CheckoutScreen;
