import React from "react";
import { PdfWrapper } from "@/components/abituriyent/pdf_download/style";
import { ReactComponent as BtnIcon } from "@/assets/icons/abituriyent/pdf-icon.svg";
import { ReactComponent as Icon } from "@/assets/icons/select-icon.svg";

function PdfDownload({ link, text }) {
  return (
    <PdfWrapper>
      <div className="container" style={{ margin: "7px 0" }}>
        <div className="pdf-box">
          <div className="left-content">
            <p>{text}</p>
            <Icon />
          </div>
          <a href={link} download className="right-pdf">
            <BtnIcon />
          </a>
        </div>
      </div>
    </PdfWrapper>
  );
}

export default PdfDownload;
