import styled from "styled-components";

export const AbCardWrapper = styled.div`
  margin: 80px 0px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px 0;

    .card-item {
      display: flex;
      align-items: center;
      width: 49%;

      .left-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05), -2px -2px 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 20px;
        width: 50%;
        height: 390px;

        .top-item {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          color: #37363C;
          height: 85%;
          overflow-y: hidden;
          overflow-x: clip;

        }

        .bottom-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #37363C;
          }
        }
      }

      .right-item {
        position: relative;
        width: 50%;
        height: 410px;
        border-radius: 10px;
        overflow: hidden;


        div {
          width: 100%;
          height: 100%;
          background: rgba(46, 46, 46, 0.5);
          box-shadow: -2px -2px 20px rgba(0, 0, 0, 0.05), 2px 2px 20px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    margin: 60px 0;
    .container {
      gap: 40px 0;

      .card-item {
        .left-item {
          height: 306px;
          padding: 30px;

          .top-item {
            p {
              font-size: 12px;
              line-height: 17px;
            }
          }

          .bottom-item {
            p {
              font-size: 12px;
              line-height: 17px;
            }
          }
        }

        .right-item {
          height: 330px;
        }
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    margin: 60px 0;
    .container {
      .card-item {
        .left-item {
          padding: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    margin: 40px 0;
    .container {
      gap: 40px 0;

      .card-item {
        .left-item {
          height: 171px;
          padding: 10px;

          .top-item {
            p {
              font-size: 12px;
              line-height: 17px;
            }
          }

          .bottom-item {
            p {
              font-size: 12px;
              line-height: 17px;
            }
          }
        }

        .right-item {
          height: 180px;
        }
      }
    }
  }
  @media only screen and (max-width: 870px) {
    margin: 20px 0;
    .container {
      gap: 20px 0;

      .card-item {

        .left-item {
          width: 100%;
          height: 180px;
          padding: 10px;

          .top-item {
            p {
              font-size: 12px;
              line-height: 17px;
            }
          }

          .bottom-item {
            p {
              font-size: 12px;
              line-height: 17px;
              color: #737277;
            }
          }
        }

        .right-item {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 464px) {
    margin: 20px 0;
    .container {
      gap: 20px 0;

      .card-item {

        .left-item {
          width: 100%;
          height: 180px;
          padding: 10px;

          .top-item {
            p {
              font-size: 11px;
              line-height: 17px;
            }
          }

          .bottom-item {
            display: flex;
            justify-content: end;
            p {
              font-size: 12px;
              line-height: 17px;
              color: #737277;
            }
          }
        }

        .right-item {
          display: none;
        }
      }
    }
  }
`