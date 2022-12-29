import { imgUrl } from "@/api/general";
import React from "react";
import { TalabaIdWrapper } from "./style";

function TalabalarId({ data }) {
  return (
    <TalabaIdWrapper>
      <div className="container">
        <div className={"image-wrap"}>
          <img src={imgUrl + data?.img} alt="" />
        </div>
        <p
          className={"content-wrap"}
          dangerouslySetInnerHTML={{
            __html: data?.text,
          }}
        />
      </div>
    </TalabaIdWrapper>
  );
}

export default TalabalarId;
