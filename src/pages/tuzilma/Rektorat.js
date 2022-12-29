import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title/index";
import React, { useEffect } from "react";
import RektorCard from "@/components/tuzilma/RektorCard";
import { useQuery } from "react-query";
import { getRectorat } from "@/api/general";
import { useTranslation } from "react-i18next";

const Rektorat = () => {
  const { data } = useQuery("rectoeat", getRectorat);
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
        text={t("header.header__bottom__nav__item__menu.menu-2.item-1")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-2.item-1")}
        my={true}
      />
      <div className="container">
        {data?.data?.data?.map((v) => (
          <RektorCard
            key={v.id}
            // point={false}
            // link={`/structure/rectorate/${v.id}`}
            time={v.time}
            degree={v.degree}
            position={v.position}
            name={v.name}
            img={v.img}
            address={v.address}
            phone={v.phone}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Rektorat;
