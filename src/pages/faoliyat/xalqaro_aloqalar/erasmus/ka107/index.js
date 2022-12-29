import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { Ka107Wrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatKa107 } from "@/api/general";
import { useTranslation } from "react-i18next";

function Ka107() {
  const { data } = useQuery({
    queryKey: "ka107",
    queryFn: () => getFaoliyatKa107(),
  });
  const { t } = useTranslation();
  return (
    <Layout>
      <Ka107Wrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-6")} />
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

export default Ka107;
