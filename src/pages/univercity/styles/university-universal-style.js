import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

export const UniversityUniversalStyle = styled.div`
  .text {
    font-family: ${fontMontserrat};
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0;
    text-align: left;
  }

  @media screen and (max-width: 1512px) {
    .text {
      font-size: 18px;
      line-height: 21px;
    }
  }
  @media screen and (max-width: 992px) {
    .text {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media screen and (max-width: 768px) {
    .text {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;