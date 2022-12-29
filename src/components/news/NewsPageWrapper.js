import styled from "styled-components";

export const NewsPageWrapper = styled.div`
  .news-head {
    margin-bottom: 60px 0 80px 0;
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
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
  }
  .content-news {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    gap: 70px;
    height: max-content;
  }
  @media only screen and (max-width: 1512px) {
    .news-head {
      margin-bottom: 50px 0 60px 0;
      .container {
        p {
          font-size: 26px;
          line-height: 32px;
        }
      }
    }
    .card-news {
      margin-top: 60px;
      gap: 20px;
    }
    .content-news {
      margin-top: 50px;
      grid-template-columns: 1fr 0.7fr;
      gap: 20px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .card-news {
      grid-template-columns: 1fr 1fr;
    }
    .content-news {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
  @media only screen and (max-width: 834px) {
    .news-head {
      margin-bottom: 50px 0 60px 0;
      .container {
        p {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
  @media only screen and (max-width: 780px) {
    .news-head {
      margin: 20px 0 20px 0;
      .container {
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
    .card-news {
      margin-top: 40px;
    }
  }
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    .card-news {
      margin-top: 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .content-news {
      grid-template-columns: 1fr;
    }
    .order-1 {
      order: 1;
    }
    .order-2 {
      order: 3;
    }
    .order-3 {
      order: 2;
    }
  }
`;

export const NewsOneWrapper = styled.div`
  .text {
    font-family: "Montserrat";
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;
    color: #37363c;
  }
  .content-one {
    background: #ffffff;
    box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.1),
      -4px 9px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 10px;
    .padding {
      padding: 0 20px;
    }
    img {
      height: 600px;
      object-fit: cover;
      object-position: center;
      width: 100%;
      border-radius: 10px;
    }
    .text-in {
      margin: 30px 0 50px 0;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #37363c;
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 19px;
        color: #37363c;
      }
    }
  }
  @media only screen and (max-width: 1512px) {
    .text {
      margin-bottom: 20px;
      font-size: 24px;
    }
    .content-one {
      img {
        height: 435px;
      }
      .text-in {
        margin: 15px 0 40px 0;
        font-size: 18px;
        line-height: 22px;
      }
      .flex {
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .text {
      margin-bottom: 10px;
      font-size: 16px;
    }
    .content-one {
      padding: 5px;
      border-radius: 5px;
      .padding {
        padding: 0 5px;
      }
      img {
        height: 200px;
      }
      .text-in {
        margin: 10px 0 40px 0;
        font-size: 16px;
        line-height: 20px;
      }
      .flex {
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

export const NewsAnnouncementsWrapper = styled.div`
  .text {
    font-family: "Montserrat";
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;
    color: #37363c;
  }
  .contet-box {
    max-height: 740px;
    overflow-y: auto;
  }
  .content-announ {
    background: #ffffff;
    box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.1),
      -4px 9px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 30px 35px;
    max-height: 800px;
    .box {
      display: block;
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid #efeeee;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #37363c;
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 25px;
      img {
        margin-right: 20px;
        width: 25px;
        object-fit: contain;
      }
    }
  }
  @media only screen and (max-width: 1512px) {
    .text {
      margin-bottom: 20px;
      font-size: 24px;
    }
    .contet-box {
      max-height: 560px;
    }
    .content-announ {
      padding: 20px 25px;
      max-height: 600px;

      .box {
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        line-height: 22px;
      }
      .flex {
        margin-top: 20px;
        img {
          margin-right: 15px;
          width: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .text {
      margin-bottom: 10px;
      font-size: 16px;
    }
    .contet-box {
      max-height: 360px;
    }
    .content-announ {
      padding: 10px 15px;
      max-height: 380px;
      border-radius: 5px;
      .box {
        margin-bottom: 15px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
      }
      .flex {
        margin-top: 15px;
        img {
          margin-right: 10px;
          width: 14px;
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    .contet-box {
      max-height: 280px;
    }
    .content-announ {
      max-height: 300px;
      p {
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
`;

export const NewsIdWrapper = styled.div`
  p {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #37363c;
    margin-top: 40px;
  }
  .p {
    font-weight: 800;
  }
  .mySwiper {
    margin-top: 80px;
  }
  .swiper-pagination-bullets {
    display: none;
  }
  .img-foto {
    height: 546px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  }
  @media only screen and (max-width: 1512px) {
    p {
      font-size: 18px;
      line-height: 22px;
      margin-top: 40px;
    }
    .mySwiper {
      margin-top: 60px;
    }
    .img-foto {
      height: 430px;
    }
  }
  @media only screen and (max-width: 834px) {
    p {
      margin-top: 30px;
      font-size: 16px;
      line-height: 20px;
    }
    .mySwiper {
      margin-top: 50px;
    }
    .img-foto {
      height: 230px;
    }
  }
  @media only screen and (max-width: 580px) {
    p {
      font-size: 12px;
      line-height: 17px;
      margin-top: 20px;
    }
    .mySwiper {
      margin-top: 20px;
    }
    .img-foto {
      height: 130px;
    }
  }
`;
