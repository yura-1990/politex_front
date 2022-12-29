import React from "react";
import { FakultetWrapper } from "./FakultetWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import FakultetCard from "./FakultetCard";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { getHomeFacultets } from "@/api/general";

const Fakultet = () => {
  const { data } = useQuery("home-facultet", getHomeFacultets);
  const { t } = useTranslation();
  return (
    <FakultetWrapper>
      <div className="news-head">
        <div className="container">
          <p>{t("home.Fakultetlar")}</p>
        </div>
      </div>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1512: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            10: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data?.data?.data?.map((v, i) => {
            i++;
            if (i % 2 === 0) {
              return (
                <SwiperSlide key={i}>
                  <FakultetCard
                    link={"/structure/faculties/" + v.id}
                    img={v.img}
                    menu={v.menu}
                    icon={v.iconka}
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <div className="line-m"></div>
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1512: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            10: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data?.data?.data?.map((v, i) => {
            i++;
            if (i % 2 !== 0) {
              return (
                <SwiperSlide key={i}>
                  <FakultetCard
                    link={"/structure/faculties/" + v.id}
                    img={v.img}
                    menu={v.menu}
                    icon={v.iconka}
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </FakultetWrapper>
  );
};

export default Fakultet;
