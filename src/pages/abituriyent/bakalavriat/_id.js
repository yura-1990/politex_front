import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import AbituriyentId from "@/components/abituriyent/abituriyent_id";
import PdfDownload from "@/components/abituriyent/pdf_download";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBachelorsbyidId, imgUrl } from "@/api/general";

function BakalavriatAbId() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getBachelorsbyidId(id),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-6.item-1")}
      />
      <AbituriyentId data={data?.data?.data[0]} />
      {data?.data?.data[0].file?.split(",")?.map((v, i, a) => (
        <PdfDownload
          key={v.id}
          text={"file"}
          link={
            i === 0
              ? `${imgUrl}${v.substring(1, v.length - 1).substring(1)}`
              : i === a.length - 1
              ? `${imgUrl}${v.substring(1, v.length - 1).slice(0, -1)}`
              : `${imgUrl}${v.substring(1, v.length - 1)}`
          }
        />
      ))}
    </Layout>
  );
}

export default BakalavriatAbId;
