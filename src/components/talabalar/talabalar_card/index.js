import React from "react";
import { TalabaCardWrapper } from "./style";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";

function TalabalarCard({ data = [] }) {
  console.log("dta", data);
  const { t } = useTranslation();

  const [size] = useWindowSize();
  const navigate = useNavigate();
  return (
    <TalabaCardWrapper>
      <div className="container">
        {data?.map((item) => (
          <div
            className={"card-item"}
            onClick={() => size < 892 && navigate(`${item?.id}`)}
          >
            <div className={"left-item"}>
              <div></div>
              <img src={imgUrl + item?.img} alt="" />
            </div>
            <div className={"right-item"}>
              <div>{item?.title}</div>
              <div
                className={t("batafsil")}
                onClick={() => size > 892 && navigate(`${item?.id}`)}
              >
                {size > 892 ? (
                  <ButtonHeigthWrapper>Batafsil</ButtonHeigthWrapper>
                ) : (
                  <p>03.10.2020</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TalabaCardWrapper>
  );
}

export default TalabalarCard;
