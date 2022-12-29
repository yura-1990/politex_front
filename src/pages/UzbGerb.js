import React from "react";
import UZBGERB from "@/assets/images/home/gerbUZB.png";
import {HaqidaWrapper} from "./UzBayrog";
import Layout from "@/layout/Layout";
import {useTranslation} from "react-i18next";
import CustomTitle from "@/components/custom_title";

const UzbGerb = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <CustomTitle name={t("gerb1")} my={true}/>
            <div className="container">
                <img
                    src={UZBGERB}
                    style={{width: "40%", margin: "auto", display: "block"}}
                    alt=""
                />
                <HaqidaWrapper>
                    <div dangerouslySetInnerHTML={{__html: t("gerb")}}/>
                </HaqidaWrapper>
            </div>
        </Layout>
    );
};

export default UzbGerb;
