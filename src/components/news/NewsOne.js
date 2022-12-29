import {
  getAnnouncements,
  getEvents,
  getHomeSlider,
  getNews,
  getSports,
  imgUrl,
} from "@/api/general";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { NewsOneWrapper } from "./NewsPageWrapper";

const NewsOne = ({ category }) => {
  const [p, setp] = useState(1);

  const { data } = useQuery({
    queryKey: ["news", p],
    queryFn: () => {
      if (category == 1) {
        return getNews(p);
      } else if (category == 2) {
        return getEvents(p);
      } else if (category == 3) {
        return getAnnouncements(p);
      } else {
        return getSports(p);
      }
    },
  });

  const { t } = useTranslation();
  let datas = data?.data?.data?.data;
  // let onedata = datas?.[datas?.length - 1];
  let onedata = datas?.[0];

  return (
    <>
      <NewsOneWrapper>
        <p className="text">{onedata?.title}</p>
        <div className="content-one">
          <img src={imgUrl + onedata?.img} alt="news" />
          <div className="text-in padding">
            {onedata?.text.slice(0, 200)}
            {onedata?.text?.length > 201 ? "..." : ""}
          </div>
          <div className="flex padding">
            <p>
              <Moment date={onedata?.created_at} format="HH:mm DD.MM.YYYY" />
            </p>
            <Link
              to={
                category == 1
                  ? `/new/news/${onedata?.id}`
                  : category == 2
                  ? `/new/events/${onedata?.id}`
                  : category == 3
                  ? `/new/announcements/${onedata?.id}`
                  : `/new/sport/${onedata?.id}`
              }
            >
              <ButtonHeigthWrapper> {t("batafsil")}</ButtonHeigthWrapper>
            </Link>
          </div>
        </div>
      </NewsOneWrapper>
    </>
  );
};

export default NewsOne;
