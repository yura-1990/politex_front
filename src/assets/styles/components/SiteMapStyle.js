import styled from "styled-components";
import { fontMontserrat } from "@/assets/styles/abstract/variables";
import FOOTERIMG from "@/assets/images/header/sitemapimg.png";

const SiteMapStyle = styled.div`
  min-height: calc(100vh - 60px);
  background-color: #fefefe;
  background-image: url(${FOOTERIMG});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  .site__map__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    // SiteMap Left
    .site__map__top__left {
      display: flex;
      align-items: center;
    }

    .site__map__logo {
      display: inline-block;
      margin-right: 25px;
    }

    .site__map__title,
    .site__map__title__mini {
      display: flex;
      flex-direction: column;
      font-family: ${fontMontserrat}, sans-serif;
      font-size: 30px;
      font-weight: 800;
      line-height: 48px;
      letter-spacing: 0;
      text-align: left;
      color: #1b6b50;
    }

    .site__map__title__mini {
      display: none;
    }

    // SiteMap Right
    .site__map__top__right {
      font-family: ${fontMontserrat}, sans-serif;
      font-size: 30px;
      font-weight: 800;
      line-height: 48px;
      letter-spacing: 0;
      text-align: left;
      display: flex;
      align-items: center;

      .close__icon {
        display: none;
      }
    }

    @media screen and (max-width: 1512px) {
      .site__map__title {
        font-size: 20px;
        line-height: 35px;
      }
    }
    @media screen and (max-width: 1200px) {
      padding: 15px 0;

      .site__map__top__right {
        .text {
          display: none;
        }

        .close__icon {
          display: block;
          cursor: pointer;
        }
      }

      .site__map__title {
        display: none;
      }

      .site__map__title__mini {
        display: flex;
        font-size: 18px;
        font-weight: 800;
        line-height: 25px;
      }

      .site__map__logo {
        width: 50px;
        height: 50px;
        margin-right: 12px;
      }
    }
  }

  // SiteMap center
  .site__map__center {
    border-top: 2px solid #1b6b50;
    border-bottom: 2px solid #1b6b50;
    padding: 27px;

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;

      a {
        font-family: ${fontMontserrat};
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;
      }

      .dropdown__item__lang__text {
        color: black;
      }
    }

    .site__map__center__details {
      display: none;

      .search__box {
        margin-bottom: 20px;
        padding: 5px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #737277;

        .search__input {
          flex: 1;
          border: none;
          outline: none;
          font-family: ${fontMontserrat};
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0;
          text-align: left;
        }

        .search__icon {
          cursor: pointer;
        }
      }

      .site__map__center__details__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .site__map__center__details__grid__items {
          a {
            display: block;
            text-align: center;
            background: rgba(33, 133, 99, 0.95);
            opacity: 0.95;
            border-radius: 5px;
            padding: 8px 0;
            font-family: ${fontMontserrat};
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            letter-spacing: 0;
            color: #fff;
          }
        }
      }
    }

    @media screen and (max-width: 1512px) {
      .nav {
        a {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      border: unset;
      padding: 27px 0;
      .nav {
        display: none;
      }

      .site__map__center__details {
        display: block;
      }
    }
  }

  //  SiteMap bottom
  .site__map__bottom {
    .site__map__bottom__nav {
      padding: 60px 27px 0;
      display: flex;
      justify-content: space-between;
    }

    .site__map__bottom__nav__item {
      border-left: 1px solid #e7e7e7;
      padding: 0 3px;
      width: 13%;
    }

    .site__map__bottom__nav__item__title {
      font-family: ${fontMontserrat};
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0;
      text-align: left;
      margin-bottom: 15px;
    }

    .site__map__bottom__nav__item__nav {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    li a,
    li span {
      font-family: ${fontMontserrat};
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0;
      text-align: left;
      color: #737277;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding: 15px 5px;
      transition: 0.5s;

      .down__icon {
        transition: 0.5s;
      }

      &.active {
        background-color: #1b6b50;
        color: #fff;
        border-radius: 8px;

        .down__icon {
          transform: rotateZ(-180deg);
        }

        ~ .dropdown {
          max-height: 1000px;
        }
      }
    }

    li {
      .dropdown {
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: hidden;
        max-height: 0;
        transition: 0.5s;
      }
    }

    @media screen and (max-width: 1512px) {
      .site__map__bottom__nav__item__title {
        font-size: 17px;
      }

      li a,
      li span {
        font-size: 15px;
      }
    }
    @media screen and (max-width: 1200px) {
      .site__map__bottom__nav {
        flex-direction: column;
        padding: 0;
      }

      .site__map__bottom__nav__item {
        border: unset;
        width: 100%;
      }

      .site__map__bottom__nav__item__title {
        background: rgba(115, 114, 119, 0.55);
        border-radius: 5px;
        color: black;
        padding: 11px 0;
        text-align: center;
        position: relative;
        cursor: pointer;
        margin-bottom: 8px;

        .plus__and__minus__icon {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);

          span {
            width: 15px;
            height: 2px;
            background-color: black;
            display: block;
            position: absolute;
            top: 50%;
            right: 10px;
            transition: 0.3s;

            &:first-child {
              transform: rotateZ(-90deg);
            }
          }
        }

        &.active {
          color: #fff;
          background: #218563f2;

          .plus__and__minus__icon {
            span {
              background: #fff;
            }

            span:first-child {
              transform: rotateZ(0deg);
            }
          }

          ~ .site__map__bottom__nav__item__nav {
            max-height: 1200px;
          }
        }
      }

      .site__map__bottom__nav__item__nav {
        max-height: 0;
        overflow: hidden;
        transition: 0.5s;

        li a,
        li span {
          background: rgba(189, 188, 194, 0.45);
          border-radius: 5px;
          margin-bottom: 8px;
          color: black;
          text-align: center;
          position: relative;
          justify-content: center;

          .down__icon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            transition: 0.2s;
          }

          &.active {
            background: #218563f2;
            color: #fff;

            .down__icon {
              transform: translateY(-50%) rotateZ(-180deg);
            }
          }
        }
      }
    }
  }
`;

export default SiteMapStyle;
