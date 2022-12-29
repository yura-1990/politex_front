import React, { useState } from "react";
// Style
import HeaderStyle from "../assets/styles/layout/HeaderStyle";
// Icons
import { RiMenu4Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
// i18next
import { useTranslation } from "react-i18next";
// Images
import Logoru from "@/assets/images/header/logoru.svg";
import Logouz from "@/assets/images/header/logouz.svg";
import Logoen from "@/assets/images/header/logoen.png";
// React-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";
// Components
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  headerBottomNav,
  headerBottomNavItemMenu,
  headerCenterNav,
} from "@/data/header-mock-data";
import HeaderBottomNavItemMenu from "@/components/header/headerBottomNavItemMenu";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchMenu, setSearchMenu] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [Ivalue, setIvalue] = useState("");
  const openSearchMenu = () => {
    setSearchMenu(true);
    if (searchMenu && Ivalue.trim().length > 1) navigate(`/search/${Ivalue}`);
  };
  const closeSearchMenu = () => {
    setSearchMenu(false);
    setIvalue("");
  };

  const openNav = (id) => {
    setSelectedNav(id);
  };
  const closeNav = (id) => {
    setSelectedNav(null);
  };

  return (
    <HeaderStyle>
      <div className="header__center">
        <div className="container">
          <div className="logo__and__title">
            <img
              className={"logo"}
              onClick={() => navigate("/")}
              src={
                localStorage.getItem("i18nextLng") === "ru"
                  ? Logoru
                  : localStorage.getItem("i18nextLng") === "uz"
                  ? Logouz
                  : Logoen
              }
              alt="logo"
            />
            <div className={"title"}>
              <span>{t("header.center.titleT")}</span>
              <span>{t("header.center.titleB")}</span>
            </div>
            <div className={"title__mini"}>
              <span>{t("header.center.titleMT")}</span>
              <span>{t("header.center.titleMB")}</span>
            </div>
          </div>
          <ul className="header__center__nav">
            {headerCenterNav.map(({ path, id }) => {
              return (
                <li className={"header__center__nav__item"} key={id}>
                  <a href={path}>
                    {t(`header.center.header-center-nav.item-${id}`)}
                  </a>
                </li>
              );
            })}
            <li className={"header__center__nav__item lang"}>
              <LanguageSwitcher />
            </li>
          </ul>
          <Link to={"/site-map"} className={"header__center__menu__icon"}>
            <RiMenu4Fill />
          </Link>
        </div>
      </div>

      <div className={`header__bottom ${searchMenu && "search__menu__active"}`}>
        <div className="container">
          <div className="header__bottom__content">
            <div className="header__bottom__left" onClick={openSearchMenu}>
              <FiSearch />
            </div>
            <div className={"header__bottom__center"}>
              <ul className="header__bottom__center__nav">
                {headerBottomNav.map(({ path, id }) => {
                  return (
                    <li
                      className={`header__bottom__center__nav__item ${
                        selectedNav === id || pathname.includes(path)
                          ? "active"
                          : ""
                      } `}
                      key={id}
                    >
                      <span
                        onClick={() => openNav(id)}
                        onMouseMove={() => openNav(id)}
                      >
                        {t(`header.header__bottom__nav.item-${id}`)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="search">
                <input
                  type="text"
                  placeholder={"Search"}
                  className={"search__input"}
                  value={Ivalue}
                  onChange={(e) => setIvalue(e.target.value)}
                />
              </div>
            </div>
            <div className="header__bottom__right">
              <div
                className="header__bottom__right__item"
                onClick={() => navigate("/site-map")}
              >
                <RiMenu4Fill />
              </div>
              <div
                className="header__bottom__right__item"
                onClick={closeSearchMenu}
              >
                <GrClose />
              </div>
            </div>
            {headerBottomNavItemMenu.map(({ id, data, column }) => {
              return (
                <React.Fragment key={id}>
                  <HeaderBottomNavItemMenu
                    isShow={selectedNav === id}
                    columnGap={column}
                    onClick={closeNav}
                    menuList={data}
                    menuId={id}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
