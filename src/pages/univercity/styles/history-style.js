import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

const HistoryStyle = styled.div`
  padding-top: 80px;
  background: #F8F8F8;

  .btn-content {
    .btn {
      outline: none;
      border: none;
      background: #fff;
      /* green 1 */
      border-radius: 10px 10px 0 0;
      width: 400px;
      height: 80px;
      font-family: ${fontMontserrat};
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;
      color: #37363C;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: #1B6B50;
        border: 2px solid #1B6B50;
        box-shadow: 0px -6px 20px rgba(0, 0, 0, 0.06);

      }
    }
  }

  .text {
    padding: 80px 0;
    font-family: ${fontMontserrat};
    font-size: 26px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: 0;
    text-align: left;
  }

  @media screen and (max-width: 992px) {
    .text {
      padding: 40px 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
    }

    .btn-content {
      .btn {
        width: 218px;
        height: 35px;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

export default HistoryStyle