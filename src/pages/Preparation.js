import { getPrepartion } from "@/api/general";
import CustomTitle from "@/components/custom_title";
import Layout from "@/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { MoliyaviyFaoliatWrapper } from "./faoliyat/moliyaviy_faoliat/style";

const Preparation = () => {
  const { data } = useQuery({
    queryKey: "tayorlov-kursi",
    queryFn: () => getPrepartion(),
  });
  const { t } = useTranslation();
  return (
    <Layout>
      <MoliyaviyFaoliatWrapper>
        <CustomTitle name={t("Tayyorlov")} />
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data?.data?.data?.[0].text }}
        />
      </MoliyaviyFaoliatWrapper>
    </Layout>
  );
};

export default Preparation;
