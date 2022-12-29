import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { Ka107Wrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatErasmusKa } from "@/api/general";
import { useTranslation } from "react-i18next";

function Erasmus() {
  const { data } = useQuery({
    queryKey: "erasmuska",
    queryFn: () => getFaoliyatErasmusKa(),
  });
  const { t } = useTranslation();
  return (
    <Layout>
      <Ka107Wrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-3")} />
      </Ka107Wrapper>
      <div className="container">
        <div
          className="footer-malumot"
          dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }}
        />
      </div>
    </Layout>
  );
}

export default Erasmus;
