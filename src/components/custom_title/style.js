import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-top: ${(props) => (props.my ? "80px" : "80px")};
  margin-bottom: ${(props) => (props.my ? "80px" : "80px")};
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 59px;
    color: #37363c;
  }
  @media only screen and (max-width: 1512px) {
    margin-top: ${(props) => (props.my ? "60px" : "60px")};
    margin-bottom: ${(props) => (props.my ? "60px" : "60px")};
    h3 {
      font-size: 26px;
      line-height: 32px;
      margin-bottom: 13px;
    }
  }
  @media only screen and (max-width: 1100px) {
    h3 {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 784px) {
    margin-top: ${(props) => (props.my ? "40px" : "40px")};
    margin-bottom: ${(props) => (props.my ? "40px" : "40px")};
    h3 {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 7px;
    }
  }
  @media only screen and (max-width: 575px) {
    margin-top: ${(props) => (props.my ? "30px" : "30px")};
    margin-bottom: ${(props) => (props.my ? "30px" : "30px")};
    h3 {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 5px;
    }
  }
`;
