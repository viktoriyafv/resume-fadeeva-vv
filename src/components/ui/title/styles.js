import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: ${(props) => {
    let fontWeight = "700";
    if (props.$size === TitleSize.ABOUT) {
      fontWeight = "500";
    }
    return fontWeight;
  }};
  line-height: ${(props) => {
    let lineHeight = "36px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "50px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "32px";
    }
    if (props.$size === TitleSize.RESUME) {
      lineHeight = "20px";
    }
    if (props.$size === TitleSize.VALUE) {
      lineHeight = "20px";
    }
    if (props.$size === TitleSize.ABOUT) {
      lineHeight = "50px";
    }
    return lineHeight;
  }};
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    if (props.$size === TitleSize.RESUME) {
      fontSize = "20px";
    }
    if (props.$size === TitleSize.VALUE) {
      fontSize = "18px";
    }
    if (props.$size === TitleSize.ABOUT) {
      fontSize = "44px";
    }
    return fontSize;
  }};
  font-style: ${(props) => {
    let fontStyle = "normal";
    if (props.$size === TitleSize.ABOUT) {
      fontStyle = "italic";
    }
    return fontStyle;
  }};

  @media (min-width: 1440px) {
    line-height: ${(props) => {
      let lineHeight = "36px";
      if (props.$size === TitleSize.BIG) {
        lineHeight = "50px";
      }
      if (props.$size === TitleSize.SMALL) {
        lineHeight = "32px";
      }
      if (props.$size === TitleSize.RESUME) {
        lineHeight = "20px";
      }
      if (props.$size === TitleSize.VALUE) {
        lineHeight = "35px";
      }
      if (props.$size === TitleSize.ABOUT) {
        lineHeight = "50px";
      }
      return lineHeight;
    }};
    font-size: ${(props) => {
      let fontSize = "36px";
      if (props.$size === TitleSize.BIG) {
        fontSize = "75px";
      }
      if (props.$size === TitleSize.SMALL) {
        fontSize = "36px";
      }
      if (props.$size === TitleSize.RESUME) {
        fontSize = "26px";
      }
      if (props.$size === TitleSize.VALUE) {
        fontSize = "26px";
      }
      if (props.$size === TitleSize.ABOUT) {
        fontSize = "75px";
      }
      return fontSize;
    }};
  }
`;
