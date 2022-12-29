import React, { useState } from "react";
import HeaderBottomNavItemMenuStyle from "@/assets/styles/components/HeaderBottomNavItemMenuStyle";
import { Link } from "react-router-dom";
import LogoLight from "@/assets/images/header/logo-light.png";
import { BiChevronRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const HeaderBottomNavItemMenu = ({
  menuList,
  menuId,
  isShow,
  columnGap,
  onClick,
}) => {
  const [selected, setSelected] = useState(null);
  const [selectedSubMenuId, setSelectedSubMenuId] = useState(null);
  const [subMenu, setSubMenu] = useState([]);
  const selectNavItem = (data) => {
    if (data.children) {
      setSelected(data.id);
      setSubMenu(data.children);
      setSelectedSubMenuId(data.subMenuId);
    } else {
      setSelected(null);
      setSelectedSubMenuId(null);
      setSubMenu([]);
    }
  };
  const { t } = useTranslation();
  return (
    <HeaderBottomNavItemMenuStyle
      onMouseLeave={onClick}
      className={`${isShow ? "show" : ""} ${columnGap ? "grid__80" : ""}`}
    >
      <img className={"logo-bg"} src={LogoLight} alt="logo light" />
      <div className="content">
        <div className="item">
          <div className={"title"}>
            {t(`header.header__bottom__nav.item-${menuId}`)}
          </div>
          <div className={"text"}></div>
        </div>
        <div className="item">
          <ul>
            {menuList.map((val) => {
              return val.children ? (
                <li
                  key={val.id}
                  onClick={() => selectNavItem(val)}
                  onMouseMove={() => selectNavItem(val)}
                >
                  <span className={`${selected === val.id ? "active" : ""}`}>
                    {t(
                      `header.header__bottom__nav__item__menu.menu-${menuId}.item-${val.id}`
                    )}
                    <BiChevronRight className={"right__icon"} />{" "}
                  </span>
                </li>
              ) : (
                <li key={val.id} onMouseMove={() => selectNavItem(val)}>
                  <Link to={val.path} onClick={() => onClick(null)}>
                    {t(
                      `header.header__bottom__nav__item__menu.menu-${menuId}.item-${val.id}`
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {subMenu.length > 0 && (
          <div className="item">
            <ul>
              {subMenu.length > 0 &&
                subMenu.map((val) => {
                  return (
                    <li id={val.id}>
                      <Link onClick={() => onClick(null)} to={val.path}>
                        {t(
                          `header.header__sub__menu.menu-${selectedSubMenuId}.item-${val.id}`
                        )}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </HeaderBottomNavItemMenuStyle>
  );
};

export default HeaderBottomNavItemMenu;
