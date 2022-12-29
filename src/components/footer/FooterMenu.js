import React from "react";
import { FooterMenuWrapper } from "./FooterWrapper";
import Logoru from "@/assets/images/header/logoru.svg";
import Logouz from "@/assets/images/header/logouz.svg";
import Logoen from "@/assets/images/header/logoen.png";
import TEL from "@/assets/images/footer/tel.svg";
import INS from "@/assets/images/footer/ins.svg";
import TW from "@/assets/images/footer/tw.svg";
import FB from "@/assets/images/footer/fb.svg";
import WK from "@/assets/images/footer/wk.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHomeContact } from "@/api/general";
import { useQuery } from "react-query";
import NAPA from "@/assets/icons/napa.svg";

const FooterMenu = () => {
  const { t } = useTranslation();
  const { data } = useQuery("contact", getHomeContact);
  return (
    <FooterMenuWrapper>
      <div className="back-img">
        <h3>
          {t("header.center.titleT")} {t("header.center.titleB")}
        </h3>
        <div className="container">
          <div className="content-box">
            <div className="logo">
              <img
                src={
                  localStorage.getItem("i18nextLng") === "ru"
                    ? Logoru
                    : localStorage.getItem("i18nextLng") === "uz"
                    ? Logouz
                    : Logoen
                }
                alt=""
                className="img-logo"
              />
              <p>{t("footer.Ijtimoiy")}</p>
              <div className="mesenger">
                <a href={data?.data?.data[0].telegram}>
                  <img src={TEL} alt="" />
                </a>
                <a href={data?.data?.data[0].instagram}>
                  <img src={INS} alt="" />
                </a>
                <a href={data?.data?.data[0].twitter}>
                  <img src={TW} alt="" />
                </a>
                <a href={data?.data?.data[0].facebook}>
                  <img src={FB} alt="" />
                </a>
                <a href={data?.data?.data[0].vkontakte}>
                  <img src={WK} alt="" />
                </a>
              </div>
            </div>
            <div className="link">
              <Link to="/university/rectors-congratulation">
                {t("header.header__bottom__nav__item__menu.menu-1.item-1")}
              </Link>
              <Link to="/university/requisites">
                {t("header.header__bottom__nav__item__menu.menu-1.item-2")}
              </Link>
              <Link to="/university/regulations-university">
                {t("header.header__bottom__nav__item__menu.menu-1.item-3")}
              </Link>
              <Link to="/university/rector-virtual-reception">
                {t("header.header__bottom__nav__item__menu.menu-1.item-4")}
              </Link>
              <Link to="/university/regulatory-documents">
                {t("header.header__bottom__nav__item__menu.menu-1.item-5")}
              </Link>
              <Link to="/university/history-university">
                {t("header.header__bottom__nav__item__menu.menu-1.item-6")}
              </Link>
            </div>
            <div className="link">
              <Link to="/structure/rectorate">
                {t("header.header__bottom__nav__item__menu.menu-2.item-1")}
              </Link>
              <Link to="/structure/faculties">
                {t("header.header__bottom__nav__item__menu.menu-2.item-4")}
              </Link>
              <Link to="/structure/kafedra">
                {t("header.header__bottom__nav__item__menu.menu-2.item-5")}
              </Link>
              <Link to="/students/undergraduate">
                {t("header.header__bottom__nav__item__menu.menu-6.item-1")}
              </Link>
              <Link to="/students/judiciary">
                {t("header.header__bottom__nav__item__menu.menu-6.item-2")}
              </Link>
              <Link to="/new/news">
                {t("header.header__bottom__nav__item__menu.menu-8.item-1")}
              </Link>
            </div>
            <iframe
              className="carta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17377.160790538022!2d69.19202993655432!3d41.352795890578726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1667630657919!5m2!1sru!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={"carta"}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bottom-napa">
        <div className="container">
          <p>© TDTU 2022</p>
          <a href="https://napaautomotive.uz/">
            <img src={NAPA} alt="napa automotive" />
          </a>
        </div>
      </div>
    </FooterMenuWrapper>
  );
};

export default FooterMenu;
