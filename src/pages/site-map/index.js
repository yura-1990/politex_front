import React, { useState } from "react";
import SiteMapStyle from "@/assets/styles/components/SiteMapStyle";
import PageTop from "@/components/header/PageTop";
import Logo from "@/assets/images/site-map/site-map-logo.png";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
// Icons
import { GrClose } from "react-icons/gr";
import { headerBottomNavItemMenu } from "@/data/header-mock-data";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Hr from "@/components/hr";

const SiteMap = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedSub, setSelectedSub] = useState(null);
  const [selected, setSelected] = useState(null);
  const [Ivalue, setIvalue] = useState("");
  const selectNavItemSub = (val) => {
    val.id !== selectedSub ? setSelectedSub(val.id) : setSelectedSub(null);
  };
  const selectNavItem = (id) =>
    selected === id ? setSelected(null) : setSelected(id);
  const openSearchMenu = () => {
    if (Ivalue.trim().length > 1) navigate(`/search/${Ivalue}`);
  };
  return (
    <SiteMapStyle>
      <PageTop />
      <div className="site__map">
        <div className="container">
          <div className="site__map__top">
            <div className="site__map__top__left">
              <img
                src={Logo}
                alt="logo"
                onClick={() => navigate("/")}
                className={"site__map__logo"}
              />
              <div className="site__map__title">
                <span>{t("header.center.titleT")}</span>
                <span>{t("header.center.titleB")}</span>
              </div>
              <div className="site__map__title__mini">
                <span>{t("header.center.titleMT")}</span>
                <span>{t("header.center.titleMB")}</span>
              </div>
            </div>
            <div className="site__map__top__right">
              <div className="text">{t("shiori")}</div>
              <Link to={"/"}>
                <GrClose className={"close__icon"} />
              </Link>
            </div>
          </div>
        </div>
        <Hr />
        <div className="container">
          <div className="site__map__center">
            <ul className="nav">
              <li>
                <Link to={"/"}>{t("Boglanish")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("footer.Qabul")}</Link>
              </li>
              <li>
                <a href={"https://t.me/tdtu_arm"}>{t("Onlayn")}</a>
              </li>
              {/* <li>
                <Link to={"/"}>Moliyaviy Faoliyat</Link>
              </li> */}
              <li>
                <Link to={"/"}>{t("Grand")}</Link>
              </li>
              <li>
                <Link to={"/preparation"}>{t("Tayyorlov")}</Link>
              </li>
              <li>
                <a href={"https://student.tdtu.uz/dashboard/login"}>
                  {t(`header.center.header-center-nav.item-4`)}
                </a>
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <Link to={"/"}>
                  <GrClose />
                </Link>
              </li>
            </ul>
            <div className="site__map__center__details">
              <div className="search__box">
                <input
                  type="text"
                  className={"search__input"}
                  placeholder={t("header.search")}
                  value={Ivalue}
                  onChange={(e) => setIvalue(e.target.value)}
                />
                <FiSearch className={"search__icon"} onClick={openSearchMenu} />
              </div>
              <div className={"site__map__center__details__grid"}>
                {/* <div className="site__map__center__details__grid__items">
                  <Link to={"/"}>Moliyaviy Faoliyat</Link>
                </div> */}
                <div className="site__map__center__details__grid__items">
                  <a href={"https://t.me/tdtu_arm"}>{t("Onlayn")}</a>
                </div>
                <div className="site__map__center__details__grid__items">
                  <Link to={"/"}>{t("Tayyorlov")}</Link>
                </div>
                <div className="site__map__center__details__grid__items">
                  <a href={"https://student.tdtu.uz/dashboard/login"}>
                    {t(`header.center.header-center-nav.item-4`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="site__map__bottom">
            <div className={"site__map__bottom__nav"}>
              {headerBottomNavItemMenu.map(({ data, id }) => {
                return (
                  <div className={"site__map__bottom__nav__item"} key={id}>
                    <div
                      onClick={() => selectNavItem(id)}
                      className={`site__map__bottom__nav__item__title 
                                        ${selected === id ? "active" : ""}`}
                    >
                      {t(`header.header__bottom__nav.item-${id}`)}
                      <div className={"plus__and__minus__icon"}>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <ul className={"site__map__bottom__nav__item__nav"}>
                      {data.map((val) => {
                        return val.children ? (
                          <li
                            key={val.id}
                            onClick={() => selectNavItemSub(val)}
                          >
                            <span
                              className={`${
                                selectedSub === val.id ? "active" : ""
                              }`}
                            >
                              {t(
                                `header.header__bottom__nav__item__menu.menu-${id}.item-${val.id}`
                              )}
                              <BiChevronDown className={"down__icon"} />
                            </span>
                            <ul className={"dropdown"}>
                              {val.children.map((child) => {
                                return (
                                  <li key={child.id}>
                                    <Link to={child?.path}>
                                      {t(
                                        `header.header__sub__menu.menu-${val.subMenuId}.item-${child.id}`
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        ) : (
                          <li key={val.id}>
                            <Link to={val.path}>
                              {t(
                                `header.header__bottom__nav__item__menu.menu-${id}.item-${val.id}`
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SiteMapStyle>
  );
};

export default SiteMap;
