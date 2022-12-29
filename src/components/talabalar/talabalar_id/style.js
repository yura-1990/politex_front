import styled from "styled-components";

export const TalabaIdWrapper = styled.div`
  .container {
    .image-wrap {
      width: 100%;
      height: 920px;
      margin: 60px 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content-wrap {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #37363C;
    }
  }

  @media only screen and (max-width: 1512px) {
    .container {
      .image-wrap {
        height: 612px;
        padding: 0 111px;
        margin: 40px 0;

      }

      .content-wrap {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .container {
      .image-wrap {
        height: 402px;
        padding: 0;
        margin: 40px 0;

      }

      .content-wrap {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .container {
      .image-wrap {
        height: 200px;
        padding: 0;
        margin: 20px 0;

      }

      .content-wrap {
        font-size: 12px;
        line-height:  17px;
      }
    }
  }


`