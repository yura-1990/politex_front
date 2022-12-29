import React from "react";
import { UsefulLinksWrapper } from "./FooterWrapper";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { getHomeBussins, imgUrl } from "@/api/general";
import Slider from "react-slick";

const UsefulLinks = () => {
  const { data } = useQuery("home-bussins", getHomeBussins);
  const { t } = useTranslation();
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <UsefulLinksWrapper>
      <div className="news-head">
        <div className="container">
          <p>{t("footer.Havolalar")}</p>
        </div>
      </div>
      <div className="container">
        <Slider {...settings}>
          {data?.data[0].map((v, i) => (
            <div className="swiper-slide" key={i}>
              <a href={v.link} target="blank" className="box-useful">
                <img src={imgUrl + v.img} alt="usefull links" />
                <p>{v.text}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </UsefulLinksWrapper>
  );
};

export default UsefulLinks;
