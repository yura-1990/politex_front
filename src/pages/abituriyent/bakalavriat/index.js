import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import AbituriyentCard from "@/components/abituriyent/abituriyent_card";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getAbiturBakalavr } from "@/api/general";
import { useTranslation } from "react-i18next";

function BakalavriatAb() {
  const { data } = useQuery({
    queryKey: "abitur-bak",
    queryFn: () => getAbiturBakalavr(),
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
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-6.item-1")}
      />
      <AbituriyentCard data={data?.data?.data} />
    </Layout>
  );
}

export default BakalavriatAb;
