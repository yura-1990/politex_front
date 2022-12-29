import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { MadaniyWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatMadaniyat } from "@/api/general";
import { useTranslation } from "react-i18next";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";

function MadaniyMarifiy() {
  const { data } = useQuery({
    queryKey: "madaniyat",
    queryFn: () => getFaoliyatMadaniyat(),
  });
  console.log(data);
  const { t } = useTranslation();
  return (
    <Layout>
      <MadaniyWrapper>
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-3.item-4")}
        />
        <div className="container">
          {data?.data?.data?.map((v, i) => (
            <PdfContent key={v?.id} data={v} />
          ))}
        </div>
        {/* <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }}
        /> */}
      </MadaniyWrapper>
    </Layout>
  );
}

export default MadaniyMarifiy;
