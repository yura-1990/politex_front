import React from "react";
import {OurAlumniWrapper} from "./OurAlumniWrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode, Pagination} from "swiper";
import AlumniCard from "./AlumniCard";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import {getHomeOurAlumni} from "@/api/general";

const OurAlumni = () => {
    const {data} = useQuery("home-ourAlumni", getHomeOurAlumni);
    const {t} = useTranslation();

    return (
        <OurAlumniWrapper>
            <div className="news-head">
                <div className="container">
                    <p>{t("bitiruvchi")}</p>
                </div>
            </div>
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={50}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1512: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
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
                    {data?.data?.data?.map((v, i) => (
                        <SwiperSlide key={i}>
                            <AlumniCard img={v.img} name={v.name} positions={v.positions}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </OurAlumniWrapper>
    );
};

export default OurAlumni;
