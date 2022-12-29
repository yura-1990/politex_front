import React from "react";
import { HomeCaruselWrapper } from "./HomeCaruselWrapper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { getHomeSlider, imgUrl } from "@/api/general";
import { Link } from "react-router-dom";

const HomeCarusel = () => {
  const { data } = useQuery("home-slider", getHomeSlider);
  const { t } = useTranslation();
  return (
    <>
      <HomeCaruselWrapper>
        <div className="home-back">
          <Swiper
            spaceBetween={100}
            speed={1500}
            loop={true}
            navigation={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {data?.data?.data?.map((v) => (
              <SwiperSlide key={v.id}>
                <div className="content">
                  <div className="text">
                    <p className="text-one">{v.title}</p>
                    <p className="text-two">
                      {v.category}
                      {v.text.slice(0, 180)}
                      {v.text?.length > 181 ? "..." : ""}
                    </p>
                    <div className="button-rigth">
                      <Link
                        to={
                          v.category == 1
                            ? `/new/news/${v.id}`
                            : v.category == 2
                            ? `/new/events/${v.id}`
                            : v.category == 3
                            ? `/new/announcements/${v.id}`
                            : `/new/sport/${v.id}`
                        }
                      >
                        <ButtonHeigthWrapper>
                          {t("batafsil")}
                        </ButtonHeigthWrapper>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={imgUrl + v.img}
                    alt="carusel"
                    height="700px"
                    loading={"lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </HomeCaruselWrapper>
    </>
  );
};

export default HomeCarusel;
