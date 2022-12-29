import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { CreativeSparkWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatCreative } from "@/api/general";
import { useTranslation } from "react-i18next";

function CreativeSpark() {
  const { data } = useQuery({
    queryKey: "creative",
    queryFn: () => getFaoliyatCreative(),
  });
  const { t } = useTranslation();
  return (
    <Layout>
      <CreativeSparkWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-2")} />
      </CreativeSparkWrapper>
      <div className="container">
        <div
          className="footer-malumot"
          dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }}
        />
      </div>
    </Layout>
  );
}

export default CreativeSpark;
