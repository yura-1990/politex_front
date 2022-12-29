import React, { useEffect } from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { universityHelperHttp } from "@/api/university";
import { CONGRATULATION } from "@/constants/apiRoutes";
import { imageUrl } from "@/constants/API__URLS";
import styled from "styled-components";
import parse from "html-react-parser";
import { UniversityUniversalStyle } from "@/pages/univercity/styles/university-universal-style";

const CongratulationStyle = styled.div`
  img {
    width: 100%;
    margin-bottom: 80px;
    display: inline-block;
  }

  @media screen and (max-width: 1512px) {
    img {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      margin-bottom: 20px;
    }
  }
`;

const RectorsCongratulation = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery("congratulation", () =>
    universityHelperHttp(CONGRATULATION)
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout isLoading={isLoading}>
      <CustomTitle
        name={t("pages.university.rector-congratulation-title")}
        my={true}
      />
      <CongratulationStyle>
        <UniversityUniversalStyle>
          <div className="container">
            {data?.data?.data?.map(({ img, text }, index) => {
              return (
                <React.Fragment key={index}>
                  <img src={imageUrl + img} loading={"lazy"} alt="rector" />
                  <div className={"text"}>
                    {parse(data?.data?.data?.[0]?.text)}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </UniversityUniversalStyle>
      </CongratulationStyle>
    </Layout>
  );
};

export default RectorsCongratulation;
