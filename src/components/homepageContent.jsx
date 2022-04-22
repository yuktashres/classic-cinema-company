import React from "react";

import ImageComponent from '../components/imageComponent';
import TextComponent from '../components/textComponent';

import ImageSnacks from '../images/home-snacks.png';

const homepageComponent = () => {
  return (

    <>

 <ImageComponent title="Test text" subtitle="test subtitle" image={ImageSnacks} />
 <TextComponent content="Test text here"  />

  </>

  );
};

export default homepageComponent;
