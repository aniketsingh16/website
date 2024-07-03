import React from "react";
import Link from "next/link";

const Logo = ({ url = "/", type = "default" }) => {
    if (type == "white") {
        return (
            <Link href={url} legacyBehavior>
                <a className="ps-logo">
                    <img src="/static/img/brandLogo.svg" alt="logo" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={url} legacyBehavior>
                <a className="ps-logo">
                    <img src="/static/img/brandLogo.svg" alt="logo" />
                </a>
            </Link>
        );
    }
};

export default Logo;
