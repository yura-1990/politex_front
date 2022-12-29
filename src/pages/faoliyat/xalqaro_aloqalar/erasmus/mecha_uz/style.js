import styled from "styled-components";

export const MechaUzWrapper = styled.div`
  .container {
    .wrapper {
      margin: 60px 0 80px 0;

      .info-mecha {
        width: 95%;
        margin-bottom: 40px;

        h3 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 800;
          font-size: 30px;
          line-height: 59px;
          color: #37363C;
        }
      }

      .content-mecha {
        div {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 47px;
          color: #37363C;

          span {
            font-weight: 700;
          }
        }
      }

      .info-portner {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-size: 26px;
        line-height: 32px;
        text-transform: uppercase;
        color: #37363C;
        margin-top: 10px;
      }

      .content-portner {
        li {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 32px;
          text-transform: uppercase;
          color: #37363C;
          margin-top: 10px;
          margin-left: 15px;
        }
      }

      .info-rezume {
        width: 90%;
        margin-bottom: 80px;

        p {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 47px;
          text-transform: uppercase;
          color: #37363C;
        }
      }

      .content-rezume {
        width: 100%;
        height: 920px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    .container {
      .wrapper {
        margin: 42px 0 60px 0;

        .info-mecha {
          width: 100%;
          margin-bottom: 30px;

          h3 {
            font-weight: 700;
            font-size: 23px;
            line-height: 40px;
          }
        }

        .content-mecha {
          div {
            font-size: 20px;
            line-height: 40px;
          }
        }

        .info-portner {
          font-size: 20px;
          line-height: 35px;
        }

        .content-portner {
          li {
            font-size: 20px;
            line-height: 35px;
          }
        }

        .info-rezume {
          width: 100%;
          margin-bottom: 60px;

          p {
            font-size: 18px;
            line-height: 35px;
          }
        }

        .content-rezume {
          width: 100%;
          height: 738px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .container {
      .wrapper {
        margin: 40px 0 60px 0;

        .info-mecha {
          width: 100%;
          margin-bottom: 40px;

          h3 {
            font-weight: 800;
            font-size: 16px;
            line-height: 25px;
          }
        }

        .content-mecha {
          div {
            font-size: 16px;
            line-height: 25px;

            span {
              font-weight: 700;
            }
          }
        }

        .info-portner {
          font-weight: 800;
          font-size: 16px;
          line-height: 25px;
        }

        .content-portner {
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;
          }
        }

        .info-rezume {
          width: 100%;
          margin-bottom: 40px;

          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;
          }
        }

        .content-rezume {
          width: 100%;
          height: 400px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 475px) {
    .container {
      .wrapper {
        margin: 20px 0 37px 0;

        .info-mecha {
          width: 100%;
          margin-bottom: 20px;

          h3 {
            font-weight: 800;
            font-size: 12px;
            line-height: 17px;
          }
        }

        .content-mecha {
          div {
            font-size: 12px;
            line-height: 17px;

            span {
              font-weight: 700;
            }
          }
        }

        .info-portner {
          font-weight: 800;
          font-size: 12px;
          line-height: 17px;
        }

        .content-portner {
          li {
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
          }
        }

        .info-rezume {
          width: 100%;
          margin-bottom: 20px;

          p {
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
          }
        }

        .content-rezume {
          width: 100%;
          height: 200px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`