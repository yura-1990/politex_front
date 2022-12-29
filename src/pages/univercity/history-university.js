import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import img from "@/assets/images/university/university-image.png";
import Hr from "@/components/hr";
import HistorySwiper from "@/components/university/history-swiper";
import FamousGraduates from "@/components/university/famous-graduates";
import HistoryStyle from "@/pages/univercity/styles/history-style";
import { useQuery } from "react-query";
import { universityHelperHttp } from "@/api/university";
import { HISTORY } from "@/constants/apiRoutes";
import parse from "html-react-parser";

const HistoryUniversity = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery("history", () =>
    universityHelperHttp(HISTORY)
  );
  const [tab, setTab] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout isLoading={isLoading}>
      <BigFotoBack text={t("pages.university.history-title")} img={img} />
      <HistoryStyle>
        <div className="container">
          <div className="btn-content">
            <button
              className={`btn ${!tab ? "active" : ""}`}
              onClick={() => setTab(false)}
            >
              TDTU tarixi
            </button>
            <button
              className={`btn ${tab ? "active" : ""}`}
              onClick={() => setTab(true)}
            >
              Mashhur bitiruvchilar
            </button>
          </div>
        </div>
        <Hr />
        <div className="container">
          {!tab ? (
            <>
              <div className="text">
                {data?.data && parse(data?.data?.data?.text)}
              </div>
              {data?.data && (
                <HistorySwiper imgs={JSON.parse(data?.data?.data?.imgs)} />
              )}
            </>
          ) : (
            <FamousGraduates />
          )}
        </div>
      </HistoryStyle>
    </Layout>
  );
};

export default HistoryUniversity;
