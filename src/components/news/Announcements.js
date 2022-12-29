import React from "react";
import { NewsAnnouncementsWrapper } from "./NewsPageWrapper";
import NEWSCAL from "@/assets/icons/news/newscal.svg";
import { useQuery } from "react-query";
import { getMuhimElon, getSearch } from "@/api/general";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Announcements = () => {
  // const { data } = useQuery("muhim-elon", getMuhimElon);
  const { data } = useQuery("home-facts", getSearch);
  let datas = data?.data?.data;
  const { t } = useTranslation();

  return (
    <NewsAnnouncementsWrapper>
      <p className="text">
        {t("header.header__bottom__nav__item__menu.menu-8.item-1")}
      </p>
      <div className="content-announ">
        <div className="contet-box">
          {datas?.map((v) => (
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
              className="box"
              key={v.id}
            >
              <p>{v.title}</p>
              <div className="flex">
                <img src={NEWSCAL} alt="" />
                <p>
                  <Moment date={v.created_at} format="DD.MM.YYYY" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </NewsAnnouncementsWrapper>
  );
};

export default Announcements;
