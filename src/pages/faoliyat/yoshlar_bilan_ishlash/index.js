import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { YoshlarWrapper } from "./style";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useQuery } from "react-query";
import { getFaoliyatYoshlar } from "@/api/general";
import { useTranslation } from "react-i18next";

function Yoshlar() {
  const { data } = useQuery({
    queryKey: "yoshlar",
    queryFn: () => getFaoliyatYoshlar(),
  });
  console.log(data);
  const [size] = useWindowSize();
  const changeWidthVideo = () => {
    if (size >= 1512) {
      return 920;
    } else if (size < 1512) {
      return 646;
    } else if (size <= 1024) {
      return 714;
    } else {
      return 345;
    }
  };
  const { t } = useTranslation();

  return (
    <Layout>
      <YoshlarWrapper>
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-3.item-3")}
        />
        <div className="container">
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: data?.data?.data.text }}
          />
          <CustomTitle name={""} />
          <iframe
            width={`${changeWidthVideo()}`}
            height="554"
            src={data?.data?.data.video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </YoshlarWrapper>
    </Layout>
  );
}

export default Yoshlar;
