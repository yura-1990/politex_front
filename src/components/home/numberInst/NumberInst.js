import { getHomeFacts } from "@/api/general";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { NumberInstWrapper } from "./NumberInstWrapper";

const NumberInst = () => {
  const { data } = useQuery("home-facts", getHomeFacts);
  const { t } = useTranslation();

  return (
    <NumberInstWrapper>
      <div className="container">
        <div className="content">
          <div className="box box-1">
            <p>{data?.data?.data[0].chairs}</p>
            <p>{t("home.Kafedralar")}</p>
          </div>
          <div className="box box-2">
            <p>{data?.data?.data[0].faculties}</p>
            <p>{t("home.Fakultetlar")}</p>
          </div>
          <div className="box box-3">
            <p>{data?.data?.data[0].professor}</p>
            <p>{t("home.Professor")}</p>
          </div>
          <div className="box box-4">
            <p>{data?.data?.data[0].doctoral}</p>
            <p>{t("home.Doktarantlar")}</p>
          </div>
          <div className="box box-5">
            <p>{data?.data?.data[0].students}</p>
            <p>{t("home.Talabalar")}</p>
          </div>
        </div>
      </div>
    </NumberInstWrapper>
  );
};

export default NumberInst;
