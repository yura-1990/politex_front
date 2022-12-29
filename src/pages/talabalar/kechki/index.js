import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getTalabaKechki } from "@/api/general";
import { useTranslation } from "react-i18next";

function Kechki() {
  const { data } = useQuery({
    queryKey: "kechki-talaba",
    queryFn: () => getTalabaKechki(),
  });
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <BigFotoBack
        img={
          "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
        }
        text={t("header.header__bottom__nav__item__menu.menu-4.item-3")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-4.item-3")}
      />
      <TalabalarCard data={data?.data?.data} />
    </Layout>
  );
}

export default Kechki;
