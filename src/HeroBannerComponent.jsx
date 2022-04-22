import React from "react";

const HeroBannerComponent = (props) => {
    return (
        <>
            <img src={props.image}
                 alt="Hero Banner"
                 width={`100%`}
                 height={500}>
                 </img>
        </>
    );
}

export default HeroBannerComponent;