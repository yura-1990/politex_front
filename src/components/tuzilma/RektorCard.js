import { imgUrl } from "@/api/general";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RektorCardWrapper } from "./TuzilmaWrapper";

const RektorCard = ({
  point,
  link,
  img,
  time,
  degree,
  position,
  name,
  address,
  phone,
}) => {
  let navigate = useNavigate();
  const toLink = () => {
    if (point) navigate(link);
  };
  const { t } = useTranslation();
  return (
    <RektorCardWrapper point={point} onClick={() => toLink()}>
      <div className="boder"></div>
      <div className="picture">
        <div className="boder"></div>
        <img src={imgUrl + img} alt="" />
      </div>
      <div className="text-box">
        <p className="text-bold">{name}</p>
        <p>
          {t("person.Lavozimi")} : {position}
        </p>
        <p>
          {t("person.darajasi")} : {degree}
        </p>
        <p>
          {t("person.vaqti")} : {time}
        </p>
        <p>
          {t("person.Telefon")} : {phone}
        </p>
        <p>
          {t("person.mail")} : {address}
        </p>
      </div>
      <div className="back-logo"></div>
    </RektorCardWrapper>
  );
};

export default RektorCard;
