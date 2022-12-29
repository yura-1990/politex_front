import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { DoktoranturaWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatDok } from "@/api/general";
import { useTranslation } from "react-i18next";

function Doktorantura() {
  const { data } = useQuery({
    queryKey: "dok",
    queryFn: () => getFaoliyatDok(),
  });
  const { t } = useTranslation();

  return (
    <Layout>
      <DoktoranturaWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-4.item-3")} />
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data?.data?.data.text }}
        />
      </DoktoranturaWrapper>
    </Layout>
  );
}

export default Doktorantura;
