import styled from "styled-components";

export const TalabaCardWrapper = styled.div`
  margin: 80px 0px;

  .container {
    width: 100%;
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
        width: 47%;
        height: 410px;
        background: rgba(46, 46, 46, 0.5);
        box-shadow: -2px -2px 20px rgba(0, 0, 0, 0.05), 2px 2px 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        position: relative;

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

        & img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .right-item {
        width: 53%;
        height: 390px;
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05), -2px -2px 20px rgba(0, 0, 0, 0.05);
        border-radius: 0px 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          color: #37363C;
          margin: 0;
        }

        .batafsil {
          text-align: end;
          p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #838383;
            height: 100%;
            overflow-y: unset;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    margin: 60px 0;
    .container {
      gap: 21px 0;

      .card-item {
        .left-item {
          height: 330px;
        }

        .right-item {
          height: 306px;
          padding: 30px;

          p {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    margin: 60px 0;
    .container {
      gap: 21px 0px;

      .card-item {
        .left-item {
          height: 330px;
        }

        .right-item {
          height: 306px;
          padding: 20px;

          p {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    margin: 50px 0;
    .container {
      gap: 21px 0px;

      .card-item {
        .left-item {
          height: 250px;
        }

        .right-item {
          height: 226px;
          padding: 20px;

          p {
            font-size: 18px;
            height: 85%;
            overflow-y: auto;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    margin: 40px 0;
    .container {
      gap: 20px 0;

      .card-item {
        .left-item {
          height: 200px;
        }

        .right-item {
          height: 191px;
          padding: 10px;

          p {
            font-size: 14px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 892px) {
    margin: 20px 0;
    .container {
      gap: 20px 0;
      display: flex;

      .card-item {
        .left-item {
          display: none;
        }

        .right-item {
          width: 100%;
          height: 157px;
          padding: 10px;
          cursor: pointer;

          p {
            width: 100%;
            height: 80%;
            overflow-y: scroll;
            overflow-x: clip;
            font-size: 12px;
            line-height: 17px;
            
          }
        }
      }
    }
  }
  @media only screen and (max-width: 390px) {
    margin: 20px 0;
    .container {
      gap: 20px 0;
      display: flex;

      .card-item {
        .left-item {
          display: none;
        }

        .right-item {
          width: 100%;
          height: 167px;
          padding: 5px;

          p {
            width: 100%;
            height: 80%;
            overflow-y: scroll;
            overflow-x: clip;
            font-size: 10px;
            line-height: 15px;
          }
        }
      }
    }
  }

`