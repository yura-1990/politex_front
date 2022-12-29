import CustomTitle from "@/components/custom_title";
import Layout from "@/layout/Layout";
import React from "react";
import {useTranslation} from "react-i18next";
import {HaqidaWrapper} from "./UzBayrog";

const UzbMadhiya = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <CustomTitle name={t("madhiya1")} my={true}/>
            <div className="container ">
                <audio
                    src="./madhiya.mp3"
                    style={{width: "70%", margin: "auto", display: "block"}}
                    controls
                />
                <HaqidaWrapper>
                    <div dangerouslySetInnerHTML={{__html: t("madhiya")}}/>
                </HaqidaWrapper>
            </div>
        </Layout>
    );
};

export default UzbMadhiya;
