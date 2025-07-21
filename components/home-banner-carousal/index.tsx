import React, { ReactNode } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "../home-banner-animation";

interface CarouselInterface {
  children: Array<ReactNode>;
  perView?: number;
  autoplay?: boolean;
  secondary?: boolean;
  customStyles?: any;
  sliderClassName?: string;
  includeAnimation?: boolean;
  title?: string;
}

const HomeBannerAnimation: React.FC<CarouselInterface> = ({
  children,
  perView = 1,
  autoplay = true,
  secondary = false,
  customStyles,
  sliderClassName,
  includeAnimation = false,
  title,
}) => {
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons3} alt="Previous" src="/icons-10.svg" />
      </div>
    );
  }

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons4} alt="Next" src="/icons-11.svg" />
      </div>
    );
  }

  const dotsClassName = secondary
    ? styles.secondary
    : perView > 1
      ? styles.multiple
      : "";

  const settings = {
    // Not to display the dots in banner section and stop autoplay of corrousal
    dots: false,
    // We set the infinity prop to false to resolve the duplicate banner issue.
    infinite: false,
    // autoplay: autoplay,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: perView,
    slidesToScroll: perView,
    arrows: !secondary,
    dotsClass: `${styles.button__bar} ${dotsClassName}`,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className={`${styles.slider} ${customStyles} ${secondary ? styles.secondarySlider : ""
        }`}
    >
      <Slider {...settings} className={sliderClassName}>
        {includeAnimation && (
          <div className={styles.scrollTitle}>
            <ScrollAnimation />
            <div className={styles.titleSection}>
              <h1 className={styles.tgsrtcServing}>{title}</h1>
            </div>
          </div>
        )}
        {children.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBannerAnimation;
