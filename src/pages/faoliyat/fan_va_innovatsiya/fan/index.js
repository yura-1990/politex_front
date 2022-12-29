import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { FanWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatFan } from "@/api/general";
import { useTranslation } from "react-i18next";

function Fan() {
  const { data } = useQuery({
    queryKey: "fan",
    queryFn: () => getFaoliyatFan(),
  });
  const { t } = useTranslation();

  return (
    <Layout>
      <FanWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-4.item-1")} />
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data?.data?.data.text }}
        />
      </FanWrapper>
    </Layout>
  );
}

export default Fan;
