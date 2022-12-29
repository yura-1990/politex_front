import { getHomeNews } from "@/api/general";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { NewsWrapper } from "./NewsWrapper";

const News = () => {
  const { data } = useQuery("news-home", getHomeNews);
  const { t } = useTranslation();
  return (
    <>
      <NewsWrapper>
        <div className="news-head">
          <div className="container">
            <p>{t("header.header__bottom__nav.item-8")}</p>
            <Link to={"/new/news"}>
              <ButtonHeigthWrapper>{t("barchasi")}</ButtonHeigthWrapper>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="card-news">
            {data?.data?.data?.data?.map((v) => (
              <NewsCard
                key={v.id}
                title={v.title}
                text={v.text}
                link={"/new/news/" + v.id}
                img={v.img}
                time={v.created_at}
              />
            ))}
          </div>
        </div>
      </NewsWrapper>
    </>
  );
};

export default News;
