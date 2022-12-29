import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { SpaceComWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatErasmusSpace } from "@/api/general";
import { useTranslation } from "react-i18next";

function SpaceCom() {
  const { data } = useQuery({
    queryKey: "space",
    queryFn: () => getFaoliyatErasmusSpace(),
  });
  const { t } = useTranslation();

  return (
    <Layout>
      <SpaceComWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-5")} />
      </SpaceComWrapper>
      <div className="container">
        <div
          className="footer-malumot"
          dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }}
        />
      </div>
    </Layout>
  );
}

export default SpaceCom;
