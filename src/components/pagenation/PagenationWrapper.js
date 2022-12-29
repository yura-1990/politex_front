import styled from "styled-components";

export const PagenationWrapper = styled.div`
  margin: 50px auto 0 auto;
  width: max-content;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  user-select: none;
  h6,
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #121332;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #1b6b50;
    margin: 0 5px;
  }
  h6 {
    &:first-child {
      border-left: none;
    }
  }
  p,
  h6 {
    padding: 8px 15px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h6 {
    width: max-content;
  }
  .next {
    background: #1b6b50;
    border-radius: 40px;
    color: #ffffff;
  }
  .yes {
    background: #1b6b50;
    color: #ffffff;
    transition: all 0.4s linear;
  }
  @media (max-width: 800px) {
    margin: 30px auto 0 auto;
    border-radius: 32px;
    padding: 0 20px;
    h6,
    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    p {
      margin: 0 10px;
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 500px) {
    margin: 20px auto 0 auto;
    border-radius: 32px;
    padding: 0;
    h6,
    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
    p {
      margin: 0;
      width: 20px;
      height: 100%;
    }
  }
  @media (max-width: 350px) {
    margin: 20px auto 0 auto;
    border-radius: 26px;
    padding: 0;
    h6,
    p {
      padding: 5px 12px;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      height: max-content;
    }
    p {
      margin: 0;
      width: 14px;
      height: 100%;
    }
  }
`;
