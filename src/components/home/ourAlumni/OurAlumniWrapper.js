import styled from "styled-components";

export const OurAlumniWrapper = styled.div`
  margin-bottom: 80px;
  .news-head {
    margin: 80px 0;
    border-bottom: 2px solid #efeeee;
    .container {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      p {
        padding-bottom: 10px;
        font-family: "Montserrat";
        font-weight: 800;
        font-size: 40px;
        line-height: 59px;
        color: #37363c;
      }
    }
  }
  .swiper-pagination-bullets {
    display: none;
  }

  @media only screen and (max-width: 1512px) {
    margin-bottom: 60px;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 26px;
          line-height: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 834px) {
    margin-bottom: 60px;
    .news-head {
      margin: 60px 0;
      .container {
        p {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
  @media only screen and (max-width: 780px) {
    margin-bottom: 60px;
    .news-head {
      margin: 40px 0 20px 0;
      .container {
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    margin-bottom: 40px;
  }
`;

export const AlumniCardWrapper = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 360px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 130%;
    text-align: center;
    color: #37363c;
    &:last-child {
      margin-top: 10px;
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 1512px) {
    img {
      height: 350px;
    }
    p {
      font-size: 24px;
      line-height: 130%;
    }
  }
  @media only screen and (max-width: 834px) {
    img {
      height: 270px;
    }
    p {
      font-size: 20px;
      line-height: 130%;
    }
  }
  @media only screen and (max-width: 580px) {
    img {
      height: 190px;
    }
    p {
      font-size: 16px;
      line-height: 130%;
    }
  }
`;
