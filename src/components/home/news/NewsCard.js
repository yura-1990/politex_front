import React from "react";
import { NewsCardWrapper } from "./NewsWrapper";
import LOGONEWS from "@/assets/images/home/logoHome.svg";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { imgUrl } from "@/api/general";
import Moment from "react-moment";

const NewsCard = ({ title, link, img, text, time }) => {
  const { t } = useTranslation();
  return (
    <NewsCardWrapper>
      <img
        src={imgUrl + img}
        alt="card"
        className="back-img"
        loading={"lazy"}
      />
      <div className="news-logo">
        <img src={LOGONEWS} alt="" className="logo" />
        <p>{t("header.center.titleB")}</p>
      </div>
      <p className="text-top">{title}</p>
      <p className="text-midle">
        {text?.slice(0, 170)}
        {text?.length > 171 ? "..." : ""}
      </p>
      <div className="time-link">
        <p className="time">
          <Moment date={time} format="HH:mm DD.MM.YYYY" />
        </p>
        <Link to={link}>
          <ButtonHeigthWrapper color={"yes"}>
            {t("batafsil")}
          </ButtonHeigthWrapper>
        </Link>
      </div>
    </NewsCardWrapper>
  );
};

export default NewsCard;
