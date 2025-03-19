import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Main } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
