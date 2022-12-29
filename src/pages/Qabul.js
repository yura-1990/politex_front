import { getQabul } from "@/api/general";
import CustomTitle from "@/components/custom_title";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import styled from "styled-components";

const QabulWrapper = styled.div``;

const Qabul = () => {
  const { t } = useTranslation();
  const { data } = useQuery("rectoeat", getQabul);
  console.log(data?.data?.data);
  let datas = data?.data?.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <QabulWrapper>
        <CustomTitle name={t("footer.Qabul")} my={true} />
        <div className="container">
          {datas?.map((v) => (
            <PdfContent data={v} />
          ))}
        </div>
      </QabulWrapper>
    </Layout>
  );
};

export default Qabul;
