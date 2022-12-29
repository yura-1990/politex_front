import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import TalabalarId from "@/components/talabalar/talabalar_id";
import Layout from "@/layout/Layout";
import PdfDownload from "@/components/abituriyent/pdf_download";
import { getStudentdId, imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function KechkiId() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getStudentdId(id),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <CustomTitle name={"Kechki"} />
      <TalabalarId data={data?.data?.data[0]} />
      {data?.data?.data[0].imgs?.split(",")?.map((v, i, a) => (
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

export default KechkiId;
