import styled from "styled-components";

export const AbituriyentIdWrapper = styled.div`
  margin-bottom: 80px;

  .container {
    .img-box {
      width: 100%;
      height: 920px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .title-box {
      h3 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 125%;
        color: #37363C;
        margin: 60px 0 30px 0;
      }
    }

    .content-box {
      p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        color: #37363C;
        margin-bottom: 60px;
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    margin: 60px 0;
    .container {
      .img-box {
        height: 738px;
      }

      .title-box {
        h3 {
          font-size: 20px;
          line-height: 24px;
          margin: 40px 0 20px 0;
        }
      }

      .content-box {
        p {
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 784px) {
    margin: 60px 0;
    .container {
      .img-box {
        height: 400px;
      }

      .title-box {
        h3 {
          font-size: 16px;
          line-height: 25px;
          margin: 40px 0;
        }
      }

      .content-box {
        p {
          font-size: 16px;
          line-height: 25px;
          margin-bottom: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 520px) {
    margin: 20px 0 50px 0;
    .container {
      .img-box {
        height: 400px;
      }

      .title-box {
        display: none;
      }

      .content-box {
        p {
          font-size: 12px;
          line-height: 17px;
          margin-top: 20px;
        }
      }
    }
  }
`