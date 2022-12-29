import React from 'react';
import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";
import {useQuery} from "react-query";
import {universityHelperHttp} from "@/api/university";
import {GRADUATES} from "@/constants/apiRoutes";
import {imgUrl} from "@/api/general";


const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 80px 0 0;
  gap: 75px 40px;

  .card {
    padding: 0 0 0 30px;
    display: flex;
    align-items: center;
    height: 120px;
    box-shadow: -4px 9px 20px rgba(0, 0, 0, 0.05), 8px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;

    img {
      width: 135px;
      height: 135px;
      display: inline-block;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 30px;
    }

    .card__title {
      font-family: ${fontMontserrat};
      font-size: 26px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: 0;
      text-align: left;
    }

    .card__desc {
      font-family: ${fontMontserrat};
      font-size: 24px;
      font-weight: 400;
      line-height: 40px;
      text-align: left;
      letter-spacing: 0;
    }
  }

  @media screen and (max-width: 1512px) {
    .card {
      img {
        width: 130px;
        height: 130px;
      }

      .card__title {
        font-size: 20px;
        line-height: 24px;
      }

      .card__desc {
        font-size: 18px;
        line-height: 21px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    padding: 40px 0 0;
    gap: 27px 20px;
    .card {
      padding: 0 0 0 5px;
      height: 50px;

      img {
        width: 55px;
        height: 55px;
      }

      .card__title {
        font-size: 16px;
        line-height: 17px;
        font-weight: 400;
      }

      .card__desc {
        display: none;
      }
    }
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 16px;
    .card {
      padding: 0 0 0 5px;
      height: 34px;

      img {
        width: 40px;
        height: 40px;
      }

      .card__title {
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
      }

    }
  }
`;


const FamousGraduates = () => {
    const {data} = useQuery("graduates", () => universityHelperHttp(GRADUATES));
    return (
        <>
            <Style>
                {
                    data?.data?.data && data.data.data.map((v, i) => <div className="card" key={i}>
                        <img src={imgUrl + v.img} alt=""/>
                        <div>
                            <div className="card__title">
                                {v.name}
                            </div>
                            <div className="card__desc">
                                {v.positions}
                            </div>
                        </div>
                    </div>)
                }
            </Style>
        </>
    );
};

export default FamousGraduates;