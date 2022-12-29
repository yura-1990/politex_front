import React from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { XalqaroHamkorlikWrapper } from "./style";
import RektorCard from "@/components/tuzilma/RektorCard";
import HodimlarCard from "@/components/tuzilma/HodimlarCard";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import { useQuery } from "react-query";
import {
  getFaoliyatXalqaroHamkor,
  getFaoliyatXalqaroHamkorHodim,
  getFaoliyatXalqaroHamkorQoshma,
} from "@/api/general";
import { useTranslation } from "react-i18next";

function XalqaroHamkorlik() {
  const { data } = useQuery({
    queryKey: "xalqaro-hamkor",
    queryFn: () => getFaoliyatXalqaroHamkor(),
  });
  const data2 = useQuery({
    queryKey: "xalqaro-hamkor-qoshma",
    queryFn: () => getFaoliyatXalqaroHamkorQoshma(),
  });
  const data3 = useQuery({
    queryKey: "xalqaro-hamkor-2",
    queryFn: () => getFaoliyatXalqaroHamkorHodim(),
  });
  const { t } = useTranslation();
  const v = data?.data?.data[0];
  console.log("hodim", data3?.data?.data?.data);
  return (
    <Layout>
      <XalqaroHamkorlikWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-5.item-1")} />
        <div className="container">
          <RektorCard
            key={v?.id}
            time={v?.accept_date}
            degree={v?.degree}
            position={v?.position}
            name={v?.name}
            img={v?.photo}
            address={v?.email}
            phone={v?.phone}
          />
        </div>
        <HodimlarCard data={data3?.data?.data?.data} />
        <div className="container">
          <div className="content-box">
            <p>{v?.text} </p>
          </div>
        </div>
        <CustomTitle name={"2+2 qo’shma dastur"} />
        <TalabalarCard data={data2?.data?.data?.data} />
      </XalqaroHamkorlikWrapper>
    </Layout>
  );
}

export default XalqaroHamkorlik;
