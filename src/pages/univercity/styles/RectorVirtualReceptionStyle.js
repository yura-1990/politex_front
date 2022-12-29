import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

const randomDeg = () => {
    const num = Math.random().toFixed(1);
    if (num > 0.5) {
        return Math.floor(Math.random() * 35)
    } else {
        return Math.floor(Math.random() * -35)
    }
}
const RectorVirtualReceptionStyle = styled.div`
  position: relative;


  .virtual__reception__img {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    max-width: 367px;
    max-height: 360px;
  }

  .virtual-reception-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 80%;
    z-index: 1;
    position: relative;
  }

  .virtual-reception-content-item {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }


  .item-1, .item-2, .item-5 {
    width: 48%;
  }

  .item-3, .item-4 {
    width: 100%;
  }

  .item-6 {
    width: 18%;
  }

  .item-7 {
    width: 26%;
  }

  .verification {
    margin-top: auto;
    border: 1px solid #1B6B50;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: rgba(40, 184, 134, 0.31);
    font-family: 'Rubik Distressed', cursive;;
    user-select: none;

    span {
      transform: rotate(calc(18deg * var(--i)));
      color: #1e88d3;
      font-size: 24px;

      &:nth-child(1) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(2) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(3) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(4) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(5) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(6) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(7) {
        transform: rotateZ(${randomDeg()}deg);
      }
      &:nth-child(8) {
        transform: rotateZ(${randomDeg()}deg);
      }
    }

  ;
  }

  .input {
    background: #F5F5F7;
    border: 1px solid #1B6B50;
    border-radius: 10px;
    padding: 0 20px;
    height: 50px;
    outline: none;
    font-family: ${fontMontserrat};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;

    &.textarea {
      padding: 13px 20px;
      height: unset;
      max-width: 100%;
    }
  }

  .label {
    font-family: ${fontMontserrat};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 10px;
  }

  .file-input {
    display: none;
  }

  .file-content {
    position: relative;
    background: #F5F5F7;
    border: 1px solid #1B6B50;
    border-radius: 10px;
    height: 50px;
    padding: 0 140px 0 2px;
    overflow: hidden;
    display: flex;
  }

  .file__upload__label {
    position: absolute;
    top: 0;
    right: 0;
    width: 64px;
    height: 50px;
    background: #1B6B50;
    border-radius: 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
  }

  .file-content-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
    min-width: 130px;
    background-color: #EAEEEE;
    border-radius: 10px;
    color: #1B6B50;;
    margin-right: 4px;

    .close__icon {
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      color: red;
    }
  }

  .item-7 {
    position: relative;

    .input {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  .verification__button {
    position: absolute;
    right: 0;
    bottom: 0;
    outline: none;
    border: none;
    height: 50px;
    background: #1B6B50;
    border-radius: 10px;
    width: 150px;
    color: #fff;
    font-family: ${fontMontserrat};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    .virtual__reception__img {
      display: none;
    }

    .virtual-reception-content {
      max-width: 100%;
    }

    .item-5 {
      width: 100%;
    }

    .item-6, .item-7 {
      width: 48%;
    }
  }

  @media screen and (max-width: 768px) {
    .label, .input {
      font-size: 14px;
      line-height: 17px;
    }

    .label {
      margin-bottom: 5px;
    }

    .input, .file-content, .file__upload__label, .verification {
      height: 35px;
    }

    .file-content-item {
      min-width: 75px;
      font-size: 12px;
    }

    .file__upload__label {
      font-size: 14px;
    }

    .virtual-reception-content-item {
      margin-bottom: 15px;
    }

    .verification__button {
      font-size: 11px;
      height: 35px;
      width: 68px;
    }

    #verification-code {
      font-size: 12px;
      padding: 0 69px 0 5px;
    }

  }

`;

export default RectorVirtualReceptionStyle;