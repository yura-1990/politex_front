import React from "react";
import { Link } from "react-router-dom";
import Blazon from "@/assets/images/header/blazon.png";
import Flag from "@/assets/images/header/flag-uz.png";
import Music from "@/assets/images/header/music.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Guidelines from "@/components/GuideLines";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageTopStyle from "@/assets/styles/components/PageTopStyle";

const PageTop = () => {
  return (
    <PageTopStyle>
      <div className="header__top">
        <div className="container">
          <div className="header__top__icons">
            <Link to="/gerb">
              <img src={Blazon} alt="blazon" />
            </Link>
            <Link to="/flag">
              <img src={Flag} alt="uz flag" />
            </Link>
            <Link to="/madhiya">
              <img src={Music} alt="music" />
            </Link>
          </div>
          <ul className={"header__top__list"}>
            <li className={"header__top__list__item"}>
              <a href="tel:+998 71 246-46-00">
                <BsTelephone />
                <span>+998 71 246-46-00</span>
              </a>
            </li>
            <li className={"header__top__list__item"}>
              <a href="mailto:tstu_info@tdtu.u">
                <AiOutlineMail />
                <span>tstu_info@tdtu.u</span>
              </a>
            </li>
            <li className={"header__top__list__item"}>
              <Guidelines />
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/gerb">
                <img src={Blazon} alt="blazon" />{" "}
              </Link>
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/flag">
                <img src={Flag} alt="uz flag" />
              </Link>
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/madhiya">
                <img src={Music} alt="music" />
              </Link>
            </li>
            <li className={`header__top__list__item lang`}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </PageTopStyle>
  );
};

export default PageTop;
