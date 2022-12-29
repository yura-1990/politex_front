import React from "react";
import CustomTitle from "@/components/custom_title";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import { IlmiyFaoliyatWrapper } from "@/pages/ilmiy_faoliyat/style";

function Ilmiy_Faoliyat() {
  return (
    <Layout>
      <IlmiyFaoliyatWrapper>
        <BigFotoBack
          img={
            "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
          }
          text={"TEXNIKA YULDUZLARI"}
        />
        <CustomTitle name={"TEXNIKA YULDUZLARI"} />
        <div className="container">
          <div className="wrapper ">
            <div className="left-content">
              <div className="image-box">
                <img
                  src="https://s12.favim.com/orig/160310/flower-whitedress-women-Favim.com-4068107.jpg"
                  alt=""
                />
              </div>
              <div className="pdf-box">
                <PdfContent />
                <PdfContent />
                <PdfContent />
                <PdfContent />
              </div>
            </div>
            <div className="right-content">
              <div className="info-box">
                RESPUBLIKA MIQYOSIDAGI ILMIY JURNAL 2001 YILDA TASHKIL TOPGAN VA
                YILIGA 4 MAROTABA CHOP ETILADI
              </div>
              <div className="pdf-box">
                <PdfContent />
              </div>
            </div>
          </div>
        </div>
      </IlmiyFaoliyatWrapper>
    </Layout>
  );
}

export default Ilmiy_Faoliyat;
