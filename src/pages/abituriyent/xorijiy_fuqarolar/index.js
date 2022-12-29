import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import AbituriyentCard from "@/components/abituriyent/abituriyent_card";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getAbiturXorijiy } from "@/api/general";
import { useTranslation } from "react-i18next";

function XorijiyFuqarolar() {
  const { data } = useQuery({
    queryKey: "abitur-xorijiy",
    queryFn: () => getAbiturXorijiy(),
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
        name={t("header.header__bottom__nav__item__menu.menu-6.item-5")}
      />
      <AbituriyentCard data={data?.data?.data?.data} />
    </Layout>
  );
}

export default XorijiyFuqarolar;
