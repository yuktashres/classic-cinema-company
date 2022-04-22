import React from "react";

import ImageComponent from '../components/imageComponent';
import TextComponent from '../components/textComponent';

import ImageSnacks from '../images/home-snacks.png';
import ImageTickets from '../images/home-tickets.png';

const homepageComponent = () => {
  return (

    <>

 <ImageComponent image={ImageSnacks} />
 <TextComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa mauris, efficitur in urna eget, aliquam aliquet nisi. Praesent a felis at libero accumsan efficitur. Aenean a justo fringilla libero rhoncus mattis sit amet et dui. Nullam eget urna vitae nisi ultrices lacinia. Etiam vestibulum tristique sem, sed sagittis turpis varius in."  />
 <ImageComponent image={ImageTickets} />
 <TextComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa mauris, efficitur in urna eget, aliquam aliquet nisi. Praesent a felis at libero accumsan efficitur. Aenean a justo fringilla libero rhoncus mattis sit amet et dui. Nullam eget urna vitae nisi ultrices lacinia. Etiam vestibulum tristique sem, sed sagittis turpis varius in."  />

  </>

  );
};

export default homepageComponent;
