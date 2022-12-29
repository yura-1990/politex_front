import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { getKorrupsiyaId } from "@/api/general";

function TdtuShartnomalar() {
  const { t } = useTranslation();
  const { data } = useQuery({
    queryKey: ["todos", 1],
    queryFn: () => getKorrupsiyaId(1),
  });

  return (
    <Layout>
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-7.item-1")}
      />
      <div className="container">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data?.data?.text,
          }}
        />
      </div>
    </Layout>
  );
}

export default TdtuShartnomalar;
