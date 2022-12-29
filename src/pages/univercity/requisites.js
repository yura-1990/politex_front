import React, { useEffect } from "react";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";
import CustomTitle from "@/components/custom_title";
import { useQuery } from "react-query";
import { universityHelperHttp } from "@/api/university";

const Requisites = () => {
  const { t } = useTranslation();
  const { isLoading, data } = useQuery("charter", () =>
    universityHelperHttp("rekvizts")
  );

  const datas = data?.data?.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <CustomTitle name={t("pages.university.requisites-title")} my={true} />
      <div className="container">
        <div
          dangerouslySetInnerHTML={{
            __html: datas?.text,
          }}
        />
      </div>
    </Layout>
  );
};

export default Requisites;
