import React, { useContext } from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { MenuContext } from "./person-state";
import styled from "styled-components";

const PersonalTitleStyled = styled.button`
  display: block;
  font-family: ${(props) => props.theme.fontFamily};
  line-height: 32px;
  font-size: 28px;
  font-weight: 700;
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.colorBlackForText};
  padding: 0;
  margin-bottom: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${(props) => props.theme.colorFocusLink};
  }

  &:disabled {
    outline: none;
    color: ${(props) => props.theme.colorBlackForText};
    cursor: none;
  }
`;

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };
  return (
    <PersonalTitleStyled
      className={isMenuOpen ? "active" : ""}
      onClick={clickHandler}
    >
      Личная информация:
    </PersonalTitleStyled>
  );
};

const DesktopComponent = () => {
  return (
    <>
      <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
        Личная информация:
      </Title>
    </>
  );
};

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

function PersonalTitle() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

export default PersonalTitle;
