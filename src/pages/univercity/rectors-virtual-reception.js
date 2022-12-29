import React, { useEffect, useRef, useState } from "react";
import Layout from "@/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { useTranslation } from "react-i18next";
import RectorVirtualReceptionStyle from "@/pages/univercity/styles/RectorVirtualReceptionStyle";
import { IoIosFolderOpen, IoMdClose } from "react-icons/io";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import img from "@/assets/images/virtual-reception/virtual-reception.png";
import getCaptcha from "@/utils/captcha";
import { addVirtualReception } from "@/api/university";
import { ADD_RECEPTIONS } from "@/constants/apiRoutes";
import { toast } from "react-toastify";

const RectorsVirtualReception = () => {
  const { t } = useTranslation();
  const translateKeyLabels = (text) =>
    "pages.university.virtual-reception.labels." + text;
  const translateKeyInputs = (text) =>
    "pages.university.virtual-reception.inputs." + text;
  const [captcha, setCaptcha] = useState("");
  const verificationRef = useRef(null);
  const [data, setData] = useState({});
  const getInputValues = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const getFiles = (e) => {
    setData({ ...data, fayl: e.target.files[0] });
  };
  const deleteFile = () => {
    setData({ ...data, fayl: null });
  };

  useEffect(() => {
    setCaptcha(getCaptcha());
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const sendDataRectors = (e) => {
    e.preventDefault();
    if (captcha === verificationRef.current.value) {
      addVirtualReception(ADD_RECEPTIONS, data).then((res) => {
        if (res.ok) {
          toast.success(res.message);
          setData({});
        }
      });
    } else {
      toast.error(t("pages.university.virtual-reception.verification"));
    }
  };
  return (
    <Layout>
      <CustomTitle
        name={t("pages.university.rector-virtual-reception-title")}
        my={true}
      />
      <RectorVirtualReceptionStyle>
        <div className="container">
          <form
            className="virtual-reception-content"
            onSubmit={sendDataRectors}
          >
            <div className="virtual-reception-content-item item-1">
              <label htmlFor="full-name" className={"label"}>
                {t(translateKeyLabels("item-1"))}
              </label>
              <input
                type="text"
                className={"input"}
                id={"full-name"}
                name={"name"}
                onChange={getInputValues}
                value={data.name || ""}
                required
                placeholder={t(translateKeyLabels("item-1"))}
              />
            </div>
            <div className="virtual-reception-content-item item-2">
              <label htmlFor="phone" className={"label"}>
                {t(translateKeyLabels("item-2"))}
              </label>
              <input
                type="text"
                className={"input"}
                id={"phone"}
                name={"phone"}
                value={data.phone || ""}
                required
                onChange={getInputValues}
                placeholder={"+998 (__) XXX-XX-XX"}
              />
            </div>
            <div className="virtual-reception-content-item item-3">
              <label htmlFor="subject" className={"label"}>
                {t(translateKeyLabels("item-3"))}
              </label>
              <input
                type="text"
                className={"input"}
                id={"subject"}
                name={"matn"}
                onChange={getInputValues}
                value={data.matn || ""}
                required
                placeholder={t(translateKeyLabels("item-3"))}
              />
            </div>
            <div className="virtual-reception-content-item item-4">
              <label htmlFor="text" className={"label"}>
                {t(translateKeyLabels("item-4"))}
              </label>
              <textarea
                className={"input textarea"}
                id={"text"}
                rows={5}
                name={"mavsu"}
                value={data.mavsu || ""}
                onChange={getInputValues}
                placeholder={t(translateKeyLabels("item-4"))}
                required
              />
            </div>
            <div className="virtual-reception-content-item item-5">
              <label htmlFor="file-upload" className={"label"}>
                {t(translateKeyLabels("item-5"))}
              </label>
              <div className={"file-content"}>
                {data.fayl && (
                  <div className="file-content-item">
                    <BsFillFileEarmarkTextFill />
                    <div className="close__icon">
                      <IoMdClose onClick={deleteFile} />
                    </div>
                  </div>
                )}

                <label
                  htmlFor={"file-upload"}
                  className={"file__upload__label"}
                >
                  <IoIosFolderOpen />
                </label>
              </div>
              <input
                type="file"
                accept="application/*"
                onChange={getFiles}
                className={"file-input"}
                id={"file-upload"}
              />
            </div>
            <div className="virtual-reception-content-item item-6">
              <div className="verification">
                {captcha.split("").map((v, i) => (
                  <span data-index={i} key={i}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="virtual-reception-content-item item-7">
              <input
                type="text"
                className={"input"}
                id={"verification-code"}
                ref={verificationRef}
                placeholder={t(translateKeyInputs("item-1"))}
              />
              <button className={"verification__button"} type={"submit"}>
                {t(translateKeyInputs("item-2"))}
              </button>
            </div>
          </form>
          <img
            src={img}
            className={"virtual__reception__img"}
            alt="virtual-reception"
          />
        </div>
      </RectorVirtualReceptionStyle>
    </Layout>
  );
};
export default RectorsVirtualReception;
