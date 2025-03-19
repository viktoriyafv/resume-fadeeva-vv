import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 20px;
  font-weight: 400;
  background-color: ${(props) => props.theme.colorForLightBackground};
  color: ${(props) => props.theme.colorBlackForText};

  @media (min-width: 1440px) {
    font-size: 23px;
    line-height: 30px;
  }
}

#root {
  position: relative;
  min-height: 100%;
  min-width: ${(props) => props.theme.mobileWidth};
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
`;
