import React, { useState } from "react";
import { IlmiyFaoliyatWrapper } from "@/pages/ilmiy_faoliyat/style";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getTexnika, imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";

function GumanitarFanlar() {
  const id = "Ta’lim tizimida ijtimoiy gumanitar fanlar";
  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTexnika(id),
  });
  const { t } = useTranslation();
  const [img, setimg] = useState("");
  return (
    <Layout>
      <IlmiyFaoliyatWrapper>
        <BigFotoBack
          img={
            "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
          }
          text={t("header.header__bottom__nav__item__menu.menu-5.item-3")}
        />
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-5.item-3")}
        />
        <div className="container">
          <div className="wrapper ">
            <div className="left-content">
              <div className="image-box">
                <img
                  src={
                    img
                      ? imgUrl + img
                      : "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                  }
                  alt=""
                />
              </div>
              <div className="pdf-box">
                {data?.data?.data?.map((v, i) => {
                  i++;
                  if (i % 2 != 0)
                    return (
                      <div onClick={() => setimg(v.img)}>
                        <PdfContent data={v} />
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="right-content">
              <div className="pdf-box">
                {data?.data?.data?.map((v, i) => {
                  i++;
                  if (i % 2 == 0)
                    return (
                      <div onClick={() => setimg(v.img)}>
                        <PdfContent data={v} />
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </IlmiyFaoliyatWrapper>
    </Layout>
  );
}

export default GumanitarFanlar;
