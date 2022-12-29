import React from "react";
import styled from "styled-components";
import LINE from "@/assets/images/home/line.svg";

const BigFotoBackWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .back-color {
    padding: 320px 0;
    background: rgba(0, 0, 0, 0.5);
  }
  p {
    background-image: url(${LINE});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
    font-family: "Montserrat";
    font-weight: 800;
    font-size: 50px;
    line-height: 59px;
    color: #ffffff;
    text-align: center;
    padding: 50px 0;
  }
  @media only screen and (max-width: 1512px) {
    .back-color {
      padding: 270px 0;
    }
    p {
      font-size: 40px;
      line-height: 49px;
      padding: 40px 0;
    }
  }
  @media only screen and (max-width: 834px) {
    .back-color {
      padding: 150px 0;
    }
    p {
      font-size: 26px;
      line-height: 29px;
      padding: 40px 0;
    }
  }
  @media only screen and (max-width: 580px) {
    .back-color {
      padding: 70px 0;
    }
    p {
      background-size: 70%;
      font-size: 20px;
      line-height: 23px;
      padding: 20px 0;
    }
  }
`;

const BigFotoBack = ({img, text}) => {
    return (
        <BigFotoBackWrapper img={img}>
            <div className="back-color">
                <div className="container">
                    <p>{text}</p>
                </div>
            </div>
        </BigFotoBackWrapper>
    );
};

export default BigFotoBack;
