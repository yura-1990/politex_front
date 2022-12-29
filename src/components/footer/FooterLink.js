import { getHomeContact } from "@/api/general";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FooterLinkWrapper } from "./FooterWrapper";

const FooterLink = () => {
  const { t } = useTranslation();
  const { data } = useQuery("contact", getHomeContact);

  return (
    <FooterLinkWrapper>
      <div className="top-hover">
        <div className="box">
          <div className="box-in">
            <p>{t("footer.Tashrif")}</p>
            <p className="text-bottom">
              Toshkent shahri, Universitet ko`chasi 2-uy
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <Link to={"/qabul"}>
              <p>{t("footer.Qabul")}</p>
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <p>{t("footer.Contact")}</p>
            <p className="text-bottom">
              <a
                className="text-link"
                href={`tel:${data?.data?.data[0].email}`}
              >
                {data?.data?.data[0].email}
              </a>
              <a
                className="text-link"
                href={`tel:${data?.data?.data[0].phone}`}
              >
                {data?.data?.data[0].phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </FooterLinkWrapper>
  );
};

export default FooterLink;
