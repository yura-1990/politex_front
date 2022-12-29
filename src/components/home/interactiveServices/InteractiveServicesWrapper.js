import styled from "styled-components";

export const InteractiveServicesWrapper = styled.div`
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
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 150px;
    .card-box {
      padding: 28px 30px;
      background: #ffffff;
      box-shadow: 0px 8px 16px -5px rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 0.3s linear;
      border: 1px solid #ffffff;
      .icon {
        width: 40px;
        height: 40px;
        object-fit: contain;
        object-position: center;
        margin-right: 60px;
      }
      .content {
        .text-1 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 26px;
          line-height: 32px;
          color: #37363c;
        }
        .text-2 {
          margin-top: 10px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 24px;
          color: #37363c;
        }
      }
      &:not(:first-child) {
        margin-top: 50px;
      }
      &:hover {
        transition: all 0.3s linear;
        border: 1px solid #1b6b50;
        box-shadow: none;
      }
    }
    .img-humans {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1512px) {
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 26px;
          line-height: 32px;
        }
      }
    }
    .container {
      gap: 50px;
      .card-box {
        padding: 20px;
        .icon {
          width: 30px;
          height: 30px;
          margin-right: 45px;
        }
        .content {
          .text-1 {
            font-size: 20px;
            line-height: 24px;
          }
          .text-2 {
            font-size: 15px;
            line-height: 18px;
          }
        }
        &:not(:first-child) {
          margin-top: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 834px) {
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
    .container {
      gap: 20px;
      .card-box {
        padding: 15px;
        .icon {
          width: 25px;
          height: 25px;
          margin-right: 25px;
        }
        .content {
          .text-1 {
            font-size: 16px;
            line-height: 20px;
          }
          .text-2 {
            font-size: 13px;
            line-height: 16px;
          }
        }
        &:not(:first-child) {
          margin-top: 30px;
        }
      }
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
    .container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      .card-box {
        &:not(:first-child) {
          margin-top: 15px;
        }
      }
      .img-humans {
        order: 1;
        max-width: 400px;
        margin: auto;
      }
      .card-servise {
        order: 2;
      }
    }
  }
  @media only screen and (max-width: 580px) {
  }
`;
