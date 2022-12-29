import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import Fakultet from "@/components/home/fakultetlar/Fakultet";
import { useTranslation } from "react-i18next";

const Fakultetlar = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Layout>
        <BigFotoBack
          img={
            "https://cachizer1.2gis.com/reviews-photos/d6263c8d-a67e-40dc-ab35-d31d1acfbe20.jpg?w=1920"
          }
          text={t("header.header__bottom__nav__item__menu.menu-2.item-4")}
        />
        <Fakultet />
      </Layout>
    </>
  );
};

export default Fakultetlar;
