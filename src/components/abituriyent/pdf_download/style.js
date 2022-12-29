import styled from "styled-components";

export const PdfWrapper = styled.div`
  .container {
    .pdf-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
      border-radius: 20px;

      .left-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 93%;
        height: 80px;
        padding: 0px 40px;
        font-family: "Montserrat";
        .div-1,
        .div-2 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 30px;
          color: #000000;
        }

        .div-3 {
          font-size: 24px;
          line-height: 30px;
          color: #37363c;
          margin-left: 10px;
        }

        .div-2 {
          display: none;
        }
      }

      .right-pdf {
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #d2d2d2;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        width: 7%;
        height: 80px;
        transition: 0.3s linear;
        cursor: pointer;

        svg path {
          transition: 0.3s linear;
        }

        :hover {
          background-color: #1b6b50;
          border-color: #d2d2d2;

          svg path {
            fill: #fff;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    .container {
      .pdf-box {
        box-shadow: 0px 1.6px 16px rgba(0, 0, 0, 0.05);
        border-radius: 10px;

        .left-content {
          .div-1 {
            font-size: 18px;
            line-height: 22px;
          }

          .div-3 {
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .container {
      .pdf-box {
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
        border-radius: 5px;

        .left-content {
          .div-1 {
            font-size: 18px;
            line-height: 22px;
          }

          .div-3 {
            font-size: 20px;
            line-height: 24px;
          }
        }

        .right-pdf {
          width: 10%;
        }
      }
    }
  }
  @media only screen and (max-width: 784px) {
    .container {
      .pdf-box {
        .left-content {
          .div-1 {
            font-size: 16px;
            line-height: 25px;
          }

          .div-3 {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 706px) {
    .container {
      .pdf-box {
        .left-content {
          height: 50px;

          .div-1 {
            display: none;
          }

          .div-2 {
            display: block;
            font-size: 12px;
            line-height: 17px;
          }

          .div-3 {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .right-pdf {
          height: 50px;

          svg {
            transform: scale(0.8);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .container {
      .pdf-box {
        .left-content {
          height: 50px;
          padding: 15px;

          .div-2 {
            font-size: 12px;
            line-height: 17px;
          }

          .div-3 {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .right-pdf {
          height: 50px;
          width: 15%;
        }
      }
    }
  }
  @media only screen and (max-width: 370px) {
    .container {
      .pdf-box {
        .left-content {
          height: 50px;
          padding: 10px;

          .div-2 {
            font-size: 12px;
            line-height: 17px;
          }

          .div-3 {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .right-pdf {
          height: 50px;
          width: 15%;
        }
      }
    }
  }
`;
