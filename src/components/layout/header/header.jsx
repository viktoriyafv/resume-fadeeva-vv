import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, HeaderWrapper } from "./styles";

function Header() {
  return (
    <StyledSection as="header">
      <HeaderWrapper>
        <Logo className="logo-header" />
      </HeaderWrapper>
    </StyledSection>
  );
}

export default Header;
