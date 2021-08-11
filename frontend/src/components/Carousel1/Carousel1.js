import React, { useState } from "react";
// import "./Carousel1.css";
import main1 from "../../assets/main1.png";
import main2 from "../../assets/main2.jpeg";
import main3 from "../../assets/main3.png";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    id: 1,
    src: main1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    src: main2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    src: main3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Carousel1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.src} alt={item.altText} width={"100%"} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`
            .custom-tag {
              max-width: 100%;
              background: black;
            }
            .custom-indicator {
              bottom: -40px;
            }
            .custom-indicator li {
              background-color: black;
              width: 50px;
              height: 5px;
            }
            .custom-indicator .active {
              background-color: orange;
            }
          `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          className="custom-indicator"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Carousel1;
