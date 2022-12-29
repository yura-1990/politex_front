import styled from "styled-components";
import { fontMontserrat } from "../abstract/variables";

const HeaderStyle = styled.header`
  position: relative;
  z-index: 2;

  .header__center {
    background-color: #1b6b50;
    padding: 18px 0 60px;

    .container {
      display: flex;
      justify-content: space-between;
    }

    //Menu icon
    .header__center__menu__icon {
      display: none;
    }

    // Logo and title style
    .logo__and__title {
      display: flex;
      align-items: center;
    }

    .logo {
      width: 110px;
      height: 110px;
      margin-right: 25px;
    }

    .title__mini {
      display: none;
    }

    .title {
      font-family: ${fontMontserrat};
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 35px;
      letter-spacing: 0.005em;
      text-align: left;
      color: #fff;
      max-width: 600px;
      margin-right: 30px;

      span {
        display: block;
      }
    }

    // Navigation header center
    .header__center__nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style-type: none;
      padding: 0;
    }

    .header__center__nav__item {
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }

      a {
        font-family: ${fontMontserrat};
        font-size: 1rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;
        color: #fff;
      }
    }

    @media screen and (max-width: 1512px) {
      .logo {
        width: 70px;
        height: 70px;
        margin-right: 20px;
      }

      .title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 35px;
      }

      .header__center__nav__item {
        margin-right: 30px;

        a {
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      .title {
        font-size: 0.9rem;
        line-height: 25px;
      }

      .header__center__nav__item {
        margin-right: 10px;

        &.lang {
          display: none;
        }

        &:nth-child(4) {
          margin-right: 0;
        }

        a {
          font-size: 0.7rem;
        }
      }
    }

    @media screen and (max-width: 992px) {
      padding: 15px 0;
      .header__center__nav {
        display: none;
      }

      .logo {
        width: 50px;
        height: 50px;
        margin-right: 12px;
      }

      .title {
        display: none;
      }

      .title__mini {
        display: block;
        font-family: ${fontMontserrat};
        font-size: 0.9rem;
        font-weight: 800;
        line-height: 20px;
        color: #fff;

        span {
          display: block;
        }
      }

      .header__center__menu__icon {
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: #fff;
      }
    }
  }

  .header__bottom {
    transform: translateY(-50%);

    .header__bottom__content {
      position: relative;
      height: 80px;
      display: flex;
      justify-content: space-between;
      background: #ffffff;
      box-shadow: 0 4px 13px rgba(27, 25, 25, 0.15);
      border-radius: 5px;
    }

    .header__bottom__left,
    .header__bottom__right {
      width: 88px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      cursor: pointer;
    }

    .header__bottom__left {
      border-right: 2px solid #f2f2f2;
    }

    .header__bottom__right {
      border-left: 2px solid #f2f2f2;
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: unset;
      justify-content: unset;
      overflow: hidden;
    }

    .header__bottom__right__item {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
    }

    // Header bottom center
    .header__bottom__center {
      //overflow: hidden;
      position: relative;
      flex: 1;
    }

    &.search__menu__active {
      .header__bottom__center__nav,
      .search,
      .header__bottom__right__item {
        transform: translateY(-100%);
      }

      .search {
        opacity: 1;
        visibility: visible;
      }

      .header__bottom__center__nav {
        opacity: 0;
        visibility: hidden;
      }
    }

    .header__bottom__center__nav {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      //padding: 0 50px;
      margin: 0;
      height: 100%;
      transition: 0.5s;
    }

    .header__bottom__center__nav__item {
      height: 100%;
      font-family: ${fontMontserrat};
      font-size: 1rem;
      font-weight: 500;
      padding: 0 20px;
      //line-height: 59px;
      text-align: left;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.1s;

      &.active {
        border-bottom: 3px solid #1b6b50;
      }
    }

    // Searchbar
    .search {
      transition: 0.5s;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      opacity: 0;
      visibility: hidden;

      .search__input {
        width: 100%;
        height: unset;
        outline: none;
        border: none;
        font-family: ${fontMontserrat};
        font-size: 1rem;
        font-weight: 500;
        padding: 10px;
        border-bottom: 1px solid #d2d2d2;
      }
    }

    @media screen and (max-width: 1512px) {
      .header__bottom__center__nav__item {
        font-size: 0.8rem;
      }
    }
    @media screen and (max-width: 1200px) {
      .header__bottom__center__nav__item {
        font-size: 0.6rem;
      }

      .header__bottom__center__nav {
        padding: 0 20px;
      }
    }
    @media screen and (max-width: 992px) {
      display: none;
      visibility: hidden;
    }
  }
`;

export default HeaderStyle;
