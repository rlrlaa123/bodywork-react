import React, { useEffect, useState } from "react";
import main1 from "../../assets/main1.png";
import main2 from "../../assets/main2.jpeg";
import main3 from "../../assets/main3.png";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img
          src={item.src}
          alt={item.altText}
          width={"100%"}
          data-aos="fade-up"
        />
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
            .custom-carousel {
              margin: auto;
              width: 90%;
            }
          `}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="custom-carousel"
      >
        <CarouselIndicators
          className="custom-indicator"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          data-aos="fade-up"
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          data-aos="fade-up"
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          data-aos="fade-up"
        />
      </Carousel>
    </div>
  );
};

export default Carousel1;
