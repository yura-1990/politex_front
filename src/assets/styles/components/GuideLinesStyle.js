import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

const GuideLinesStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  .guidelines__menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 40px rgba(27, 107, 80, 0.1);
    backdrop-filter: blur(30px);
    border-radius: 5px;
    transition: 0.2s;
  }

  &.show {
    .guidelines__menu {
      opacity: 0.9;
      visibility: visible;
    }
  }

  .guidelines__menu__item.btn, .guidelines__menu__item__child {
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    font-family: ${fontMontserrat}, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    padding: 0 5px;

    &.active {
      background: #15523D;
      color: #fff;
    }
  }

  .guidelines__menu__item.flex {
    display: flex;
    justify-content: space-between;

    .guidelines__menu__item__child {
      width: 48%;
      margin: 0;

      &.active {
        background-color: #1B6B50;
        color: #fff;
      }
    }
  }
`;

export default GuideLinesStyle;