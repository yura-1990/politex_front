import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { MechaUzWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatErasmusMecha } from "@/api/general";
import { useTranslation } from "react-i18next";

function MechaUz() {
  const { data } = useQuery({
    queryKey: "mechauz",
    queryFn: () => getFaoliyatErasmusMecha(),
  });
  const { t } = useTranslation();
  return (
    <Layout>
      <MechaUzWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-4")} />
        <div className="container">
          <div
            className="footer-malumot"
            dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }}
          />
        </div>
      </MechaUzWrapper>
    </Layout>
  );
}

export default MechaUz;
