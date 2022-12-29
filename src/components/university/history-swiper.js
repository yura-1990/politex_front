import React from 'react';
import img from "@/assets/images/university/university-image.png"
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {imgUrl} from "@/api/general";

const SwiperStyle = styled.div`
  img {
    width: 100%;
    height: 100%;
  }

  .slick-next, .slick-prev {
    width: 80px;
    height: 80px;
    background-color: #1B6B50;
    border-radius: 50%;
    z-index: 2;
  }

  .slick-next {
    right: -50px
  }

  .slick-prev {
    left: -50px
  }

  @media screen and (max-width: 992px) {
    .slick-next, .slick-prev {
      display: none !important;
    }
  }
`;


const HistorySwiper = ({imgs}) => {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <SwiperStyle>
            <Slider {...settings}>
                {
                    imgs.map((img, i) => <div key={i}>
                        <img src={imgUrl + img} alt="university"/>
                    </div>)
                }
            </Slider>
        </SwiperStyle>
    );
};

export default HistorySwiper;