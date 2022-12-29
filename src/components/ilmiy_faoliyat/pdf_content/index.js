import React, { useState } from "react";
import { ReactComponent as Icon } from "@/assets/icons/select-icon.svg";
import { ReactComponent as BtnIcon } from "@/assets/icons/abituriyent/pdf-icon.svg";
import { PdfContentWrapper } from "./style";
import { imgUrl } from "@/api/general";

function PdfContent({ data }) {
  const [hide, setHide] = useState(false);
  const { download_link } = JSON.parse(data?.fileurl)?.[0] || "";
  return (
    <PdfContentWrapper hide={hide}>
      <div className="content">
        <div className="content-pdf" onClick={() => setHide(!hide)}>
          <p>{data?.title}</p>
          {/* <Icon /> */}
        </div>
        <a href={imgUrl + download_link} download className="button-pdf">
          <BtnIcon />
        </a>
      </div>
    </PdfContentWrapper>
  );
}

export default PdfContent;
