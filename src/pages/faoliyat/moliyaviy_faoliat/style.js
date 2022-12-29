import styled from "styled-components";

export const MoliyaviyFaoliatWrapper = styled.div`
  .container {
    .rows {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;

      :hover {
        .left {
          background-color: #1B6B50;
        }

        .right {
          color: #1B6B50;
        }
      }

      .left {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #444;
      }

      .right {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 35px;
        text-transform: uppercase;
        color: #37363C;
        margin-left: 10px;
      }
    }
  }

  @media only screen and (max-width: 1512px) {
    .container {
      .rows {
        margin-bottom: 10px;

        .left {
          width: 18px;
          height: 18px;
        }

        .right {
          font-weight: 800;
          font-size: 20px;
          line-height: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .container {
      .rows {
        margin-bottom: 10px;

        .left {
          width: 16px;
          height: 16px;
        }

        .right {
          font-weight: 500;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
  @media only screen and (max-width: 475px) {
    .container {
      .rows {
        margin-bottom: 10px;

        .left {
          width: 12px;
          height: 12px;
        }

        .right {
          font-weight: 500;
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
`