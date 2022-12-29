import styled from "styled-components";
import { fontMontserrat } from "@/assets/styles/abstract/variables";

const HeaderBottomNavItemMenuStyle = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  top: calc(100% + 20px);
  background: #ffffff;
  box-shadow: 0 4px 13px rgba(27, 25, 25, 0.15);
  border-radius: 5px;

  width: 100%;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  .logo-bg {
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
    padding: 50px 50px 50px 145px;
  }

  &.grid__80 {
    .content {
      grid-template-columns: 1fr 2fr;
    }

    .item:last-child {
      ul {
        column-gap: 50px;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 100%;
        }
      }
    }
  }

  .item {
    .title {
      font-family: ${fontMontserrat};
      font-size: 40px;
      font-weight: 700;
      line-height: 49px;
      margin-bottom: 30px;
    }

    .text {
      font-family: ${fontMontserrat};
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0;
      text-align: justify;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li a,
    span {
      border-bottom: 1px solid #1b6b50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px;
      font-family: ${fontMontserrat};
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;
      transition: 0.3s;
      cursor: pointer;
      text-transform: uppercase;

      .right__icon {
        transition: 0.3s;
      }

      &.active {
        background: #1b6b50;
        color: #fff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        .right__icon {
          transform: rotateZ(-180deg);
        }
      }
      &:hover {
        background: #1b6b50;
        color: #fff !important;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
      }
    }
  }

  @media screen and (max-width: 1512px) {
    .item {
      .title {
        font-size: 30px;
        line-height: 35px;
      }

      li a,
      span {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .content {
      gap: 20px;
      padding: 50px;
    }

    .item {
      .title {
        font-size: 20px;
        line-height: 25px;
      }

      li a,
      span {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;

export default HeaderBottomNavItemMenuStyle;
