import styled from "styled-components";

export const IlmiyFaoliyatWrapper = styled.div`

  .wrapper {
    margin: 80px 0;
    display: flex;
    justify-content: space-between;

    .left-content {
      width: 64%;
      display: flex;
      justify-content: space-between;

      .image-box {
        width: 42%;
        height: 574px;
        border-radius: 10px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .pdf-box {
        width: 58%;
        margin: 0 40px 0 20px;
      }
    }

    .right-content {
      width: 36%;
      padding-left: 40px;
      border-left: 1px solid #EFEEEE;

      .info-box {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        color: #37363C;
        margin-bottom: 50px;
      }

      .pdf-box {
        width: 100%;
      }
    }
  }


  .rows {
    display: flex;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 55px;
    color: #37363C;

    &:first-child {
      margin-top: 80px;
    }

    .light-text {
      font-weight: 400;
    }
    @media only screen and (max-width: 1550px){
      font-size: 20px;
      line-height: 40px;
      &:first-child {
        margin-top: 40px;
      }
    }   
    @media only screen and (max-width: 1024px){
      font-size: 16px;
      line-height: 25px;
      &:first-child {
        margin-top: 40px;
      }
    }
    @media only screen and (max-width: 575px) {
      font-size: 12px;
      line-height: 20px;
      &:first-child {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 1550px) {
    .wrapper {
      margin: 60px 0;

      .left-content {
        
        .image-box {
          width: 45%;
          height: 450px;
        }
        .pdf-box{
          margin: 0 20px 0 20px;
        }
      }

      .right-content {
        padding-left: 20px;
        .info-box{
          font-size: 20px;
          line-height: 35px;
          margin-bottom: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    .wrapper {
      margin: 60px 0;

      .left-content {

        .image-box {
          width: 45%;
          height: 450px;
        }

        .pdf-box {
          margin: 0 20px 0 20px;
        }
      }

      .right-content {
        padding-left: 20px;

        .info-box {
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      margin: 60px 0;

      .left-content {
        width: 48%;
        .image-box {
          display: none;
        }

        .pdf-box {
          margin: 0;
          width: 100%;
        }
      }

      .right-content {
        width: 48%;
        border: none;
        padding: 0;

        .info-box {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 665px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      margin: 20px 0;

      .left-content {
        width: 100%;

        .image-box {
          display: none;
        }

        .pdf-box {
          margin: 0;
          width: 100%;
        }
      }

      .right-content {
        width: 100%;
        border: none;

        .info-box {
          font-size: 12px;
          line-height: 17px;
          margin-bottom: 20px;
        }
      }
    }
  }

`