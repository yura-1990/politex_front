import { imgUrl } from "@/api/general";
import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HodimlarWrapper } from "./TuzilmaWrapper";

const HodimlarCard = ({ link, data }) => {
  const navigate = useNavigate();
  const newPage = () => {
    if (link) navigate(link + "/salom");
  };
  return (
    <HodimlarWrapper>
      <div className="news-head">
        <div className="container">
          <p>{t("Hodimlar")}</p>
        </div>
      </div>
      <div className="container">
        <div className="card-news">
          {data?.map((v, i) => (
            <div key={v.id} className="box-hodimlar" onClick={() => newPage()}>
              <img
                src={imgUrl + (v.employee_img ? v.employee_img : v.photo)}
                alt=""
              />
              <div className="text-box">
                <p className="bold">
                  {v.employeename ? v.employeename : v.name}
                </p>
                <p>
                  <span className="bold">Lavozimi:</span> {v.position}
                </p>
                <p>
                  <span className="bold">Telefon:</span> {v.phone}
                </p>
                <p>
                  <span className="bold">e-mail:</span> {v.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HodimlarWrapper>
  );
};

export default HodimlarCard;
