import React from "react";

const imageComponent = (props) => {
  return (

    <>
  <p>{props.title}</p>
  <p>{props.subtitle}</p>
  <img src={props.image} alt=""  />
  </>

  );
};

export default imageComponent;
