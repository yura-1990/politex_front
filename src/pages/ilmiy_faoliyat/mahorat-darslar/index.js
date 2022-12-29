import React from "react";
import CustomTitle from "@/components/custom_title";
import VideoCard from "@/components/ilmiy_faoliyat/video_card";
import { IlmiyFaoliyatWrapper } from "@/pages/ilmiy_faoliyat/style";
import Layout from "@/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import { useQuery } from "react-query";
import { getMahoratDarslar } from "@/api/general";
import { useTranslation } from "react-i18next";

function MahoratDarslar() {
  const { data } = useQuery({
    queryKey: "mahorat-darslari",
    queryFn: () => getMahoratDarslar(),
  });
  const { t } = useTranslation();
  console.log(data?.data?.data);
  return (
    <Layout>
      <IlmiyFaoliyatWrapper>
        <BigFotoBack
          img={
            "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
          }
          text={t("header.header__bottom__nav__item__menu.menu-5.item-4")}
        />
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-5.item-4")}
        />
        {data?.data?.data?.map((v) => (
          <VideoCard data={v} />
        ))}
        {/* <div className="container">
          <div className="rows">
            <div className="bold-text">Tahririyat manzili:</div>
            <div className={"light-text"}>
              Toshkent - 95,Unversitet ko’chasi,2
            </div>
          </div>
          <div className="rows">
            <div className="bold-text">Telefon:</div>
            <div className={"light-text"}> (71) 227-10-32</div>
          </div>
          <div className="rows">
            <div className="bold-text">E-mail:</div>
            <div className={"light-text"}>texnikayulduzlari@gmail.com</div>
          </div>
        </div> */}
      </IlmiyFaoliyatWrapper>
    </Layout>
  );
}

export default MahoratDarslar;
