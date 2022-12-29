import React from "react";
import UZBBAYROG from "@/assets/images/home/flagUZB.jpg";
import styled from "styled-components";
import Layout from "@/layout/Layout";
import {useTranslation} from "react-i18next";
import CustomTitle from "@/components/custom_title";

export const HaqidaWrapper = styled.div`
  margin-top: 60px;
  font-family: "Montserrat";
  /* font-size: ${({theme}) => theme.font_size + 28}px; */
  font-size: 28px;
  line-height: 40px;
  color: #37363c;
  .text-center {
    text-align: center;
  }
  @media (max-width: 1200px) {
    /* font-size: ${({theme}) => theme.font_size + 26}px; */
    font-size: 26px;
  }
  @media (max-width: 800px) {
    margin-top: 40px;
    /* font-size: ${({theme}) => theme.font_size + 22}px; */
    font-size: 22px;
    line-height: 34px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    /* font-size: ${({theme}) => theme.font_size + 18}px; */
    font-size: 18px;
    line-height: 28px;
  }
`;

const UzBayrog = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <CustomTitle name={t("bayrog1")} my={true}/>
            <div className="container">
                <img
                    style={{width: "70%", margin: "auto", display: "block"}}
                    src={UZBBAYROG}
                    alt=""
                />
                <HaqidaWrapper>
                    <div dangerouslySetInnerHTML={{__html: t("bayrog")}}/>
                </HaqidaWrapper>
            </div>
        </Layout>
    );
};

export default UzBayrog;
