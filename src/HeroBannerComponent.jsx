import React from "react";
import homeBanner from './images/images/HomeBanner/HomeBanner.png';

const HeroBannerComponent = (props) => {
    return (
        <>
            <img src={homeBanner}
                 alt="Hero Banner"
                 width={500}></img>
        </>
    );
}

export default HeroBannerComponent;