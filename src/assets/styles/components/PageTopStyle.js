import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

const PageTopStyle = styled.div`
  z-index: 3;
  position: relative;

  .header__top {
    background: #15523D;
    width: 100%;

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }


    .header__top__icons {
      display: none;
      align-items: center;

      a {
        margin-right: 18px;

        &:last-child {
          margin-right: 0;
        }
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .header__top__list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .header__top__list__item {
      &.lang {
        display: none;
      }

      padding: 15px 30px;

      a {
        color: #fff;
        font-family: ${fontMontserrat}, sans-serif;
        font-size: 1rem;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        display: flex;
        align-items: center;

        span {
          margin-left: 20px;
          display: inline-block;
        }
      }
    }

    .header__top__list__item:nth-child(6) {
      padding-right: 0 !important;
    }


    @media screen and (max-width: 1512px) {
      .header__top__list__item {
        padding: 8px 30px;

        span {
          font-size: 0.7rem;
        }

        img {
          width: 16px;
          height: 16px;
          object-fit: contain;
        }

        &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          padding: 8px 10px;
        }
      }

      .header__top__list__item a span {
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 1200px) {
      .container {
        justify-content: space-between;
      }

      .header__top__list__item {
        &.lang {
          display: block;
        }

        padding: 15px 9px;
      }

      .header__top__icons {
        display: flex;
      }

      .header__top__list__item.icon {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      .header__top__list__item:nth-child(3) {
        display: none;
      }

      .header__top__list__item a {
        font-size: 0.7rem;

        span {
          display: none;
        }
      }

      .header__top__icons {
        img {
          width: 18px;
          height: 18px;
        }
      }

      .header__top__list__item.lang {
        padding-right: 0;
      }
    }
  }
`;

export default PageTopStyle;

