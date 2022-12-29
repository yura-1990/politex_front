import { getBulimId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const B4 = () => {
  const { data } = useQuery({
    queryKey: ["bulim", 4],
    queryFn: () => getBulimId(4),
  });
  let datas = data?.data?.data[0];
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <BigFotoBack
          img={
            "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
          }
          text={t("header.header__sub__menu.menu-2.item-4")}
        />
        <CustomTitle name={t("header.header__sub__menu.menu-2.item-4")} />
        <div className="container">
          <RektorCard
            key={datas?.id}
            time={datas?.acceptance}
            degree={datas?.degree}
            position={datas?.position}
            name={datas?.directorname}
            img={datas?.director_img}
            address={datas?.email}
            phone={datas?.phone}
          />
        </div>
        <CustomTitle name={""} />
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: datas?.text }} />
        </div>
      </Layout>
    </>
  );
};

export default B4;
