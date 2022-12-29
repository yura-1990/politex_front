import styled from "styled-components";
import FOOTERIMG from "@/assets/images/footer/footerimg.png";

export const UsefulLinksWrapper = styled.div`
  margin: 100px 0;
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
        text-align: center;
      }
    }
  }
  .swiper-slide {
    padding: 10px 15px;
  }
  .box-useful {
    width: 100%;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 120px;
      height: 60px;
      object-fit: contain;
      object-position: center;
    }
    p {
      margin-top: 20px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-transform: uppercase;
      color: #37363c;
      text-align: center;
    }
  }
  .swiper-pagination-bullets {
    display: none;
  }

  .slick-next,
  .slick-prev {
    top: 50%;
    width: 92px;
    height: 92px;
    background: rgba(196, 187, 187, 0.5);
    border-radius: 50%;
    opacity: 0.6;
    backdrop-filter: blur(35px);
    transition: all 0.3s linear;
    color: #ffffff;
    z-index: 9999;
    &::before {
      font-family: "Courier New", Courier, monospace;
      content: ">";
      color: rgba(255, 255, 255, 0.7);
      font-size: 50px;
      font-weight: 900;
    }
    &:hover {
      transition: all 0.3s linear;
      background-color: #1b6b50;
    }
  }
  .slick-prev::before {
    content: "<";
  }
  .slick-prev {
    left: -80px;
  }
  .slick-next {
    right: -80px;
  }
  @media only screen and (max-width: 1512px) {
    margin: 80px 0;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 26px;
          line-height: 32px;
        }
      }
    }
    .box-useful {
      width: 100%;
      height: 180px;
      img {
        width: 100px;
        height: 50px;
      }
      p {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 834px) {
    margin: 60px 0;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
    .swiper-slide {
      padding: 5px;
    }
    .box-useful {
      width: 100%;
      height: 120px;
      img {
        width: 60px;
        height: 30px;
      }
      p {
        font-size: 14px;
        line-height: 17px;
      }
    }
    .slick-next,
    .slick-prev {
      display: none !important;
    }
  }
  @media only screen and (max-width: 780px) {
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
    margin: 40px 0;
    .swiper-slide {
      padding: 3px;
    }
    .box-useful {
      height: 100px;
      img {
        width: 60px;
        height: 30px;
      }
      p {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
`;

export const FooterLinkWrapper = styled.div`
  background: #1b6b50;
  .top-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #fff;
    .box {
      max-width: 685px;
      width: 100%;
      height: 90px;
      position: relative;
      z-index: 10;
      .box-in {
        z-index: 10;
        position: absolute;
        padding: 20px;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-height: 90px;
        transition: all 0.3s linear;
        background: #1b6b50;

        p {
          font-family: "Montserrat";
          font-weight: 500;
          font-size: 26px;
          line-height: 45px;
          text-align: center;
          color: #fff;
        }
        .text-bottom {
          font-size: 20px;
          line-height: 25px;
          overflow-y: hidden;
          max-height: 0;
          transition: all 0.3s linear;
          .text-link {
            font-family: "Montserrat";
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
            color: #fff;
            display: block;
            &:not(:first-child) {
              margin-top: 10px;
            }
          }
        }
        &:hover {
          transition: all 0.3s linear;
          max-height: 250px;
          .text-bottom {
            margin-top: 10px;
            transition: all 0.3s linear;
            max-height: 250px;
          }
        }
      }
      &:nth-child(2) {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
  @media only screen and (max-width: 1512px) {
    .top-hover {
      .box {
        max-width: 524px;
        height: 70px;
        .box-in {
          padding: 20px;
          max-height: 80px;
          p {
            font-size: 20px;
            line-height: 24px;
          }
          .text-bottom {
            font-size: 16px;
            line-height: 20px;
            .text-link {
              font-size: 16px;
              line-height: 20px;
            }
          }
          &:hover {
            max-height: 220px;
            .text-bottom {
              max-height: 220px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 834px) {
    .top-hover {
      .box {
        max-width: 300px;
        height: 45px;
        .box-in {
          padding: 12px;
          p {
            font-size: 17px;
            line-height: 21px;
          }
          .text-bottom {
            font-size: 14px;
            line-height: 18px;
            .text-link {
              font-size: 14px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    .top-hover {
      .box {
        max-width: 300px;
        height: 45px;
        .box-in {
          padding: 10px;
          max-height: 70px;
          p {
            font-size: 14px;
            line-height: 17px;
          }
          .text-bottom {
            font-size: 12px;
            line-height: 15px;
            .text-link {
              font-size: 12px;
              line-height: 15px;
            }
          }
          &:hover {
            max-height: 160px;
            .text-bottom {
              max-height: 160px;
            }
          }
        }
      }
    }
  }
`;

export const FooterMenuWrapper = styled.div`
  background: #1b6b50;
  .back-img {
    padding: 60px 0 110px 0;
    width: 100%;
    height: 100%;
    background-image: url(${FOOTERIMG});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  h3 {
    margin: 0 0 80px 0;
    text-align: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 48px;
    color: #ffffff;
  }
  .content-box {
    display: grid;
    grid-template-columns: 0.8fr 0.5fr 0.5fr 1fr;
    .logo {
      .img-logo {
        height: 300px;
        width: 300px;
      }
      p {
        margin-top: 100px;
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 24px;
        line-height: 59px;
        color: #ffffff;
      }
      .mesenger {
        margin-top: 40px;
        a {
          img {
            height: 32px;
            width: 32px;
          }
          &:not(:first-child) {
            margin-left: 30px;
          }
        }
      }
    }
    .link {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #ffffff;
        &:not(:first-child) {
          margin-top: 30px;
        }
      }
    }
    .carta {
      height: 500px;
      width: 100%;
      border-radius: 10px;
    }
  }
  .bottom-napa {
    padding: 30px 0;
    background: #16523d;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    p {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 24px;
      line-height: 59px;
      color: #ffffff;
    }
    img {
      width: 170px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 1512px) {
    .back-img {
      padding: 50px 0 80px 0;
    }
    h3 {
      margin: 0 0 60px 0;
      font-size: 25px;
      line-height: 30px;
    }
    .content-box {
      display: grid;
      grid-template-columns: 0.8fr 0.5fr 0.5fr 1fr;
      .logo {
        .img-logo {
          height: 200px;
          width: 200px;
        }
        p {
          margin-top: 40px;
          font-size: 18px;
          line-height: 22px;
        }
        .mesenger {
          margin-top: 20px;
          a {
            img {
              height: 24px;
              width: 24px;
            }
            &:not(:first-child) {
              margin-left: 25px;
            }
          }
        }
      }
      .link {
        a {
          font-size: 18px;
          color: #ffffff;
          &:not(:first-child) {
            margin-top: 15px;
          }
        }
      }
      .carta {
        height: 320px;
      }
    }
    .bottom-napa {
      padding: 20px 0;
      p {
        font-size: 20px;
        line-height: 24px;
      }
      img {
        width: 140px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .back-img {
      padding: 30px 0;
    }
    h3 {
      margin: 0 0 25px 0;
      font-size: 20px;
      line-height: 24px;
    }
    .content-box {
      grid-template-columns: 0.8fr 0.5fr 0.7fr 0.9fr;
      gap: 15px;
      .logo {
        .img-logo {
          width: 164px;
          height: 164px;
        }
        p {
          margin-top: 25px;
          font-size: 14px;
          line-height: 17px;
        }
        .mesenger {
          margin-top: 20px;
          a {
            img {
              height: 20px;
              width: 20px;
            }
            &:not(:first-child) {
              margin-left: 15px;
            }
          }
        }
      }
      .link {
        a {
          font-size: 14px;
          line-height: 17px;
          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
      .carta {
        height: 160px;
      }
    }
    .bottom-napa {
      padding: 12px 0;
      p {
        font-size: 12px;
        line-height: 15px;
      }
      img {
        width: 90px;
      }
    }
  }
  @media only screen and (max-width: 580px) {
    .back-img {
      padding: 30px 0;
    }
    h3 {
      margin: 0 0 20px 0;
      font-size: 15px;
      line-height: 18px;
    }
    .content-box {
      display: flex;
      flex-wrap: wrap;
      column-gap: 4%;
      row-gap: 25px;
      .logo {
        width: 100%;
        order: 4;
        .img-logo {
          display: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p {
          margin-top: 0;
          font-size: 14px;
          line-height: 17px;
        }
        .mesenger {
          margin-top: 20px;
          a {
            img {
              height: 22px;
              width: 22px;
            }
            &:not(:first-child) {
              margin-left: 25px;
            }
          }
        }
      }
      .link {
        width: 48%;
        order: 1;
        a {
          width: 100%;
          padding: 7px;
          background: rgba(37, 143, 108, 0.75);
          border-radius: 5px;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
      .carta {
        width: 100%;
        order: 2;
        height: 140px;
      }
    }
  }
`;
