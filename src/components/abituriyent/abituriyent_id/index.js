import { imgUrl } from "@/api/general";
import React from "react";
import { AbituriyentIdWrapper } from "./style";

function AbituriyentId({ data }) {
  return (
    <AbituriyentIdWrapper>
      <div className="container">
        <div className="img-box">
          <img src={imgUrl + data?.img} alt="" />
        </div>
        <div className="title-box">
          <h3>{data?.subtext}</h3>
        </div>
        <div className="content-box">
          <p
            dangerouslySetInnerHTML={{
              __html: data?.text,
            }}
          />
        </div>
      </div>
    </AbituriyentIdWrapper>
  );
}

export default AbituriyentId;
