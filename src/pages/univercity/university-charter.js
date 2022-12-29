import React, { useEffect } from "react";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";
import CustomTitle from "@/components/custom_title";
import { useQuery } from "react-query";
import { universityHelperHttp } from "@/api/university";
import { CHARTER } from "@/constants/apiRoutes";
import parse from "html-react-parser";
import { UniversityUniversalStyle } from "@/pages/univercity/styles/university-universal-style";

const UniversityCharter = () => {
  const { t } = useTranslation();
  const { isLoading, data } = useQuery("charter", () =>
    universityHelperHttp(CHARTER)
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout isLoading={isLoading}>
      <CustomTitle name={t("pages.university.charter-title")} my={true} />
      <UniversityUniversalStyle>
        <div className="container">
          {data?.data?.data?.map(({ text }, index) => {
            return (
              <React.Fragment key={index}>
                <div className={"text"}>
                  {parse(data?.data?.data?.[0]?.text)}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </UniversityUniversalStyle>
    </Layout>
  );
};

export default UniversityCharter;
