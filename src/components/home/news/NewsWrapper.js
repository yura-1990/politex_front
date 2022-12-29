import styled from "styled-components";

export const NewsWrapper = styled.div`
  margin-bottom: 80px;
  .news-head {
    margin: 80px 0;
    border-bottom: 2px solid #efeeee;
    .container {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      p {
        padding-bottom: 10px;
        font-family: "Montserrat";
        font-weight: 800;
        font-size: 40px;
        line-height: 59px;
        color: #37363c;
      }
    }
  }
  .card-news {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
  }
  @media only screen and (max-width: 1512px) {
    margin-bottom: 60px;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 26px;
          line-height: 32px;
        }
      }
    }
    .card-news {
      gap: 20px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .card-news {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 834px) {
    margin-bottom: 60px;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
  @media only screen and (max-width: 780px) {
    margin-bottom: 60px;
    .news-head {
      margin: 40px 0 20px 0;
      .container {
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    margin-bottom: 40px;
    .card-news {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

export const NewsCardWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.1), -4px 9px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  min-height: 600px;
  position: relative;
  transition: all 0.3s linear;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .back-img {
    z-index: -2;
    position: absolute;
    height: 280px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    left: 0;
    top: 0;
    transition: all 0.3s linear;
  }
  .news-logo {
    position: absolute;
    transition: all 0.3s linear;
    top: 140px;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 140px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 70px;
    .logo {
      width: 58px;
      height: 58px;
      object-fit: cover;
      object-position: center;
      margin: 0 20px 0 40px;
      transition: all 0.3s linear;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      line-height: 19px;
      color: #ffffff;
      max-width: 270px;
      margin-top: 10px;
      transition: all 0.3s linear;
    }
  }
  .text-top {
    padding: 0 40px;
    margin-top: 310px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #37363c;
    transition: all 0.3s linear;
  }
  .text-midle {
    padding: 0 40px;
    margin-top: 15px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #37363c;
    transition: all 0.3s linear;
  }
  .time-link {
    margin-top: 15px;
    padding: 0 40px 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time {
      font-family: "Montserrat";
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
      color: #37363c;
    }
  }
  &:hover {
    .back-img {
      transition: all 0.3s linear;
      height: 100%;
    }
    .news-logo {
      transition: all 0.3s linear;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding-top: 40px;
      .logo {
        margin: 0 20px 0 40px;
      }
    }
    .text-top {
      color: #ffffff;
    }
    .text-midle {
      color: #ffffff;
    }
    .time-link {
      .time {
        color: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 1512px) {
    min-height: 500px;
    .back-img {
      height: 240px;
    }
    .news-logo {
      top: 100px;
      height: 140px;
      padding-top: 70px;
      .logo {
        width: 50px;
        height: 50px;
        margin: 0 20px 0 30px;
      }
      p {
        font-size: 13px;
        line-height: 15px;
        margin-top: 8px;
      }
    }
    .text-top {
      padding: 0 30px;
      margin-top: 270px;
      font-size: 25px;
      line-height: 30px;
    }
    .text-midle {
      padding: 0 30px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 25px;
    }
    .time-link {
      margin-top: 10px;
      padding: 0 30px 10px 30px;
      .time {
        font-size: 12px;
        line-height: 15px;
      }
    }
    &:hover {
      .news-logo {
        padding-top: 30px;
        .logo {
          margin: 0 20px 0 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 834px) {
    border-radius: 5px;
    min-height: 400px;
    .back-img {
      height: 200px;
    }
    .news-logo {
      top: 100px;
      height: 100px;
      padding-top: 40px;
      .logo {
        width: 40px;
        height: 40px;
        margin: 0 10px 0 20px;
      }
      p {
        font-size: 15px;
        line-height: 18px;
        margin-top: 6px;
      }
    }
    .text-top {
      padding: 0 20px;
      margin-top: 220px;
      font-size: 16px;
      line-height: 20px;
    }
    .text-midle {
      padding: 0 20px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 17px;
    }
    .time-link {
      margin-top: 10px;
      padding: 0 30px 10px 30px;
      .time {
        font-size: 12px;
        line-height: 15px;
      }
    }
    &:hover {
      .news-logo {
        padding-top: 20px;
        .logo {
          margin: 0 10px 0 20px;
        }
      }
    }
  }
`;
