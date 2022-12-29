import styled from "styled-components";

export const ButtonHeigthWrapper = styled.button`
  padding: 7px 10px;
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: ${(props) => (props.color ? "#fff" : "#333333")};
  position: relative;
  z-index: 9999;
  transition: all 0.3s linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${(props) => (props.color ? "#fff" : "#1b6b50")};
    border-radius: 10px;
    width: 100%;
    height: 5px;
    z-index: -1;
    transition: all 0.3s linear;
  }
  &:hover {
    color: #fff;
    &::before,
    &::after {
      height: 100%;
      background-color: #1b6b50;
    }
  }
  @media screen and (max-width: 1512px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 992px) {
    background: #1b6b50;
    border-radius: 5px;
    color: #fff;
    padding: 10px 15px;
    &::before,
    &::after {
      height: 0px;
    }
    &:hover {
      color: #fff;
      &::before,
      &::after {
        height: 0;
      }
    }
  }

  @media screen and (max-width: 780px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
