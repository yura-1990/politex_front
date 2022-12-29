import styled from "styled-components";
import Logoru from "@/assets/images/header/logoru.svg";
import Logouz from "@/assets/images/header/logouz.svg";
import Logoen from "@/assets/images/header/logoen.png";

const logoLang = () => {
  if (localStorage.getItem("i18nextLng") === "ru") {
    return Logoru;
  } else if (localStorage.getItem("i18nextLng") === "uz") {
    return Logouz;
  } else {
    return Logoen;
  }
};

export const RektorCardWrapper = styled.div`
  margin-top: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  padding: 25px;
  position: relative;
  transition: all 0.3s linear;
  cursor: ${(props) => (props.point ? "pointer" : "auto")};
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 10px;
  .boder {
    transition: all 0.3s linear;
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: 2px solid #1b6b50;
    border-radius: 20px;
  }
  .back-logo {
    transition: all 0.3s linear;
    width: 220px;
    height: 220px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background-color: #1b6b50;
    -webkit-mask-image: url(${logoLang});
    mask-image: url(${logoLang});
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }
  .picture {
    position: relative;
    height: 360px;
    width: 300px;
    margin: 0 auto;
    transform: scale(1.3);
    img {
      height: 100%;
      width: 100%;
      border-radius: 20px;
      object-fit: cover;
      object-position: center;
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
      position: relative;
      z-index: 22;
      transition: all 0.3s linear;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 26px;
      line-height: 130%;
      color: #37363c;
      &:not(:first-child) {
        margin-top: 18px;
      }
    }
  }
  &:hover {
    transition: all 0.3s linear;
    background: #1b6b50;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    .boder {
      border: 2px solid #ffffff;
      transition: all 0.3s linear;
    }
    .back-logo {
      transition: all 0.3s linear;
      background-color: #ffffff;
    }
    .text-box {
      p {
        transition: all 0.3s linear;
        color: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 1512px) {
    grid-template-columns: 360px 1fr;
    margin-top: 100px;
    .picture {
      width: 260px;
      height: 300px;
      transform: scale(1.3);
    }
    .text-box {
      p {
        font-size: 20px;
        &:not(:first-child) {
          margin-top: 15px;
        }
      }
    }
    .back-logo {
      width: 180px;
      height: 180px;
    }
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 240px 1fr;
    margin-top: 80px;
    border-radius: 10px;
    .picture {
      width: 180px;
      height: 240px;
      transform: scale(1.3);
      img {
        border-radius: 10px;
      }
    }
    .text-box {
      p {
        font-size: 18px;
        &:not(:first-child) {
          margin-top: 15px;
        }
      }
    }
    .back-logo {
      width: 100px;
      height: 100px;
    }
    .boder {
      top: 3px;
      left: 3px;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      border-radius: 10px;
    }
  }
  @media only screen and (max-width: 834px) {
    margin-top: 50px;
    grid-template-columns: 200px 1fr;
    padding: 20px;
    .picture {
      width: 150px;
      height: 220px;
      transform: scale(1.3);
    }
    .text-box {
      p {
        font-size: 16px;
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
    .back-logo {
      display: none;
    }
  }
  @media only screen and (max-width: 580px) {
    margin-top: 20px;
    grid-template-columns: 1fr;
    gap: 0;
    padding: 16px;
    .picture {
      width: 130px;
      height: 150px;
    }
    .text-box {
      margin-top: 40px;
      align-items: center;
      p {
        font-size: 12px;
        &:not(:first-child) {
          margin-top: 8px;
        }
      }
    }
  }
`;

export const HodimlarWrapper = styled.div`
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
  .card-news {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
  .box-hodimlar {
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05),
      -2px -2px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    img {
      height: 360px;
      width: 300px;
      transform: scaleY(1.08);
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
    }
    .text-box {
      padding: 30px 20px;
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 130%;
        color: #37363c;
        &:not(:first-child) {
          margin-top: 15px;
        }
      }
      .bold {
        font-weight: 800;
      }
    }
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
    .card-news {
      gap: 20px;
    }
    .box-hodimlar {
      img {
        height: 320px;
        width: 250px;
        transform: scaleY(1.08);
      }
      .text-box {
        padding: 30px 20px;
        p {
          font-size: 20px;
          &:not(:first-child) {
            margin-top: 15px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .card-news {
      grid-template-columns: 1fr 1fr;
    }
    .box-hodimlar {
      img {
        width: 135px;
        height: 180px;
      }
      .text-box {
        padding: 20px 10px;
        p {
          font-size: 16px;
          &:not(:first-child) {
            margin-top: 12px;
          }
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
    .card-news {
      grid-template-columns: 1fr;
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
    .card-news {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .box-hodimlar {
      img {
        display: block;
      }
      .text-box {
        padding: 20px 15px;
        p {
          font-size: 12px;
          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
