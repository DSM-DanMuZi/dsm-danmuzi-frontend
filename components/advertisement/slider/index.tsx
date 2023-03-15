import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

type SliderProps = {
  children: React.ReactNode;
};

const SliderWrapper = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <_Wrapper {...settings}>{children}</_Wrapper>;
};

export default SliderWrapper;

const _Wrapper = styled(Slider)`
  display: flex;
`;
