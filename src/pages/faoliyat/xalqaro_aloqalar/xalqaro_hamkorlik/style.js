import styled from "styled-components";

export const XalqaroHamkorlikWrapper = styled.div`
  .container {
    .wrapper {
      margin: 60px 0;

      .img {
        width: 100%;
        height: 920px;
        border-radius: 10px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .malumot {
        margin: 80px 0;

        div {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 59px;
          color: #37363c;

          &:first-child {
            font-weight: 700;
          }
        }
      }

      .footer-malumot {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #37363c;
      }
    }

    .content-box {
      margin: 80px 0 60px 0;

      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #37363c;
      }

      @media only screen and (max-width: 1512px) {
        margin: 60px 0 40px 0;
        p {
          font-size: 18px;
          line-height: 22px;
        }
      }
      @media only screen and (max-width: 992px) {
        margin: 40px 0;
        p {
          font-size: 16px;
          line-height: 25px;
        }
      }
      @media only screen and (max-width: 475px) {
        margin: 20px 0;
        p {
          font-size: 12px;
          line-height: 17px;
        }
      }
    }

    .malumotlar {
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 59px;
        color: #37363c;

        &:first-child {
          font-weight: 700;
        }
      }

      @media only screen and (max-width: 1512px) {
        margin-bottom: 60px;
        p {
          font-size: 20px;
          line-height: 40px;

          &:first-child {
            font-weight: 800;
          }
        }
      }
      @media only screen and (max-width: 992px) {
        margin-bottom: 60px;
        p {
          font-size: 16px;
          line-height: 25px;

          &:first-child {
            font-weight: 700;
          }
        }
      }
      @media only screen and (max-width: 475px) {
        margin-bottom: 40px;
        p {
          font-size: 12px;
          line-height: 20px;

          &:first-child {
            font-weight: 700;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    .container {
      .wrapper {
        .img {
          height: 738px;
        }

        .malumot {
          margin: 60px 0;

          div {
            font-size: 20px;
            line-height: 40px;
          }
        }

        .footer-malumot {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .container {
      .wrapper {
        margin: 40px 0;

        .img {
          height: 401px;
        }

        .malumot {
          margin: 40px 0;

          div {
            font-size: 16px;
            line-height: 25px;
          }
        }

        .footer-malumot {
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .container {
      .wrapper {
        margin: 40px 0;

        .img {
          height: 200px;
          border-radius: 5px;

          img {
            border-radius: 5px;
          }
        }

        .malumot {
          margin: 20px 0;

          div {
            font-size: 12px;
            line-height: 17px;
          }
        }

        .footer-malumot {
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
`;
