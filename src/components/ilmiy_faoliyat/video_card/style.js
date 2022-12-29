import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  margin-top: 80px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .video {
      width: 55%;
      height: 554px;
      position: relative;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }

      .back-drop {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(46, 46, 46, 0.5);
        box-shadow: -2px -2px 20px rgba(0, 0, 0, 0.05), 2px 2px 20px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 133px;
          height: 133px;
          background: rgba(164, 162, 162, 0.5);
          border-radius: 50%;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            transform: scale(.4);
          }
        }
      }
    }

    .content {
      width: 45%;
      height: 534px;
      padding: 40px;
      background: #fff;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 59px;
      color: #37363C;
    }
  }

  @media only screen and (max-width: 1550px) {
    margin: 60px 0;
    .container {
      .video {
        height: 444px;
      }

      .content {
        font-size: 18px;
        line-height: 22px;
        height: 420px;
      }
    }
  }
  @media only screen and (max-width: 1124px) {
    margin: 60px 0;
    .container {
      .video {
        height: 444px;
        .back-drop{
          div{
            width: 100px;
            height: 100px;
          }
        }
      }

      .content {
        font-size: 18px;
        line-height: 22px;
        height: 420px;
      }
    }
  }
  @media only screen and (max-width: 770px) {
    margin: 0;
    .container {
      display: flex;
      flex-direction: column-reverse;

      .video {
        width: 100%;
        height: 430px;
        .back-drop{
          div{
            width: 100px;
            height: 100px;
          }
        }
      }

      .content {
        width: 100%;
        font-size: 16px;
        line-height: 59px;
        background-color: #F8F8F8;
        box-shadow: none;
        padding: 0;
        padding-top: 20px;
        height: 70px;
      }
    }
  }
  @media only screen and (max-width: 475px) {
    margin: 0;
    .container {
      display: flex;
      flex-direction: column-reverse;

      .video {
        width: 100%;
        height: 200px;

        .back-drop {
          width: 100%;
          height: 100%;

          div {
            width: 45px;
            height: 45px;
          }
        }
      }

      .content {
        width: 100%;
        font-size: 12px;
        line-height: 59px;
        background-color: #F8F8F8;
        box-shadow: none;
        padding: 20px 0 0;
        height: 70px;
      }
    }
  }
`