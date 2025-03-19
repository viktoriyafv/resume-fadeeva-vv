import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/сopyright/сopyright";
import { StyledSection, FooterWrapper } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <FooterWrapper>
        <Logo />
        <Copyright />
      </FooterWrapper>
    </StyledSection>
  );
}

export default Footer;
