import styled from "styled-components";

export const PdfContentWrapper = styled.div`
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 77px;
    margin-bottom: 22px;
    cursor: pointer;

    .content-pdf {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 59px;
        color: #37363C;
      }

      svg {
        transform: rotate(${({hide}) => hide ? '180deg' : '360deg'});
        margin-left: 6px;
      }
    }

    .button-pdf {
      width: 70px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #C4C4C4;
      transition: .3s linear;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;

      svg path {
        transition: .3s linear;
      }

      :hover {
        background-color: #1B6B50;
        border-color: #D2D2D2;

        svg path {
          fill: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 1550px){
    .content{
      height: 60px;
      margin-bottom: 20px;
      .content-pdf{
        p{
          font-size: 18px;
          line-height: 22px;
        }
        svg{
          transform: scale(.8);
        }
      }
      .button-pdf{
        svg{
          transform: scale(.8);
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    .content {
      height: 55px;
      margin-bottom: 15px;

      .content-pdf {
        padding: 14px;
        p {
          font-size: 17px;
          line-height: 20px;

        }

        svg {
          transform: scale(.8);
        }
      }

      .button-pdf {
        width: 15%;
        svg {
          transform: scale(.8);
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .content {
      height: 42px;
      margin-bottom: 20px;
      border-radius: 5px;

      .content-pdf {
        width: 88%;
        padding: 10px;
        p {
          font-size: 16px;
          line-height: 20px;
        }

        svg {
          transform: scale(.7);
        }
      }

      .button-pdf {
        width: 12%;
        svg {
          transform: scale(.7);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .content {
      height: 42px;
      margin-bottom: 20px;
      border-radius: 5px;

      .content-pdf {
        width: 90%;
        padding: 8px;

        p {
          font-size: 14px;
          line-height: 18px;
        }

        svg {
          transform: scale(.6);
        }
      }

      .button-pdf {
        width: 10%;

        svg {
          transform: scale(.6);
        }
      }
    }
  }
  @media only screen and (max-width: 475px) {
    .content {
      height: 42px;
      margin-bottom: 20px;
      border-radius: 5px;

      .content-pdf {
        width: 88%;
        padding: 8px;

        p {
          font-size: 12px;
          line-height: 16px;
        }

        svg {
          transform: scale(.6);
        }
      }

      .button-pdf {
        width: 12%;

        svg {
          transform: scale(.6);
        }
      }
    }
  }
`