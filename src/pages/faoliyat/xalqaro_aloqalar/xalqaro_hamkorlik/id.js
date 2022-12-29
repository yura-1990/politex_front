import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { XalqaroHamkorlikWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatXalqaroHamkorId, imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function QoshmaDastur() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["xalqaro-hamkor-id", id],
    queryFn: () => getFaoliyatXalqaroHamkorId(id),
  });
  const { t } = useTranslation();
  const datas = data?.data?.data?.[0];
  return (
    <Layout>
      <XalqaroHamkorlikWrapper>
        <CustomTitle name={t("faoliyat")} />
        <div className="container">
          <div className="wrapper">
            <div className="img">
              <img src={imgUrl + datas?.img} alt="" />
            </div>
            <div className="malumot">{datas?.title}</div>

            <div
              className="footer-malumot"
              dangerouslySetInnerHTML={{ __html: datas?.text }}
            />
          </div>
        </div>
      </XalqaroHamkorlikWrapper>
    </Layout>
  );
}

export default QoshmaDastur;
