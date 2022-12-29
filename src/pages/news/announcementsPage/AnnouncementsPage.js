import React, { useEffect, useState } from "react";
import NewsCard from "@/components/home/news/NewsCard";
import Announcements from "@/components/news/Announcements";
import NewsOne from "@/components/news/NewsOne";
import { NewsPageWrapper } from "@/components/news/NewsPageWrapper";
import Pagenation from "@/components/pagenation/Pagenation";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { useQuery } from "react-query";
import { getAnnouncements } from "@/api/general";
import { useTranslation } from "react-i18next";

const AnnouncementsPage = () => {
  const [p, setp] = useState(1);
  const { data } = useQuery({
    queryKey: ["announ", p],
    queryFn: () => getAnnouncements(p),
  });
  const { t } = useTranslation();
  let card = document.querySelector("#card-news55")?.offsetTop;
  useEffect(() => {
    window.scrollTo({
      top: card,
      behavior: "smooth",
    });
  }, [p]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-8.item-3")}
        my={true}
      />
      <NewsPageWrapper>
        <div className="container order-2">
          <div className="content-news">
            <NewsOne category={3} />
            <Announcements />
          </div>
        </div>
        <div className="container order-3">
          <div className="card-news" id="card-news55">
            {data?.data?.data?.data.map((v, i) => (
              <NewsCard
                title={v.title}
                link={"/new/announcements/" + v.id}
                img={v.img}
                text={v.text}
                time={v.created_at}
              />
            ))}
          </div>
          <Pagenation number={data?.data?.data?.last_page} setcount={setp} />
        </div>
      </NewsPageWrapper>
    </Layout>
  );
};

export default AnnouncementsPage;
