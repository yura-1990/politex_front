import React, { useEffect } from "react";
import AbituriyentCard from "@/components/abituriyent/abituriyent_card";
import CustomTitle from "@/components/custom_title";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getAbiturMagistr } from "@/api/general";
import { useTranslation } from "react-i18next";

function MagistraturaAb() {
  const { data } = useQuery({
    queryKey: "abitur-magistr",
    queryFn: () => getAbiturMagistr(),
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
        name={t("header.header__bottom__nav__item__menu.menu-6.item-2")}
      />
      <AbituriyentCard data={data?.data?.data} />
    </Layout>
  );
}

export default MagistraturaAb;
