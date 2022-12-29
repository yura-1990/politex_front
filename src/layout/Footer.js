import FooterLink from "@/components/footer/FooterLink";
import FooterMenu from "@/components/footer/FooterMenu";
import UsefulLinks from "@/components/footer/UsefulLinks";
import React from "react";

const Footer = () => {
  return (
    <>
      <UsefulLinks />
      <FooterLink />
      <FooterMenu />
    </>
  );
};

export default Footer;
