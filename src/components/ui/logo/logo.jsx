import React from "react";
import logo from "/src/assets/logo.svg";
import { StyledLogo, ImageLogo, Text } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/">
      <ImageLogo src={logo} alt="логотип" />
      <Text>Viktoriya F</Text>
    </StyledLogo>
  );
}

export default Logo;
