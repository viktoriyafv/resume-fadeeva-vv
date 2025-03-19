import React from "react";
import { CopirightWrapper, CopyrightStyle, ReactStyle } from "./styles";

function Copyright() {
  return (
    <CopirightWrapper>
      <ReactStyle>Проект выполнен с помощью React</ReactStyle>
      <CopyrightStyle>
        Виктория Фадеева © 2025 Все права защищены
      </CopyrightStyle>
    </CopirightWrapper>
  );
}

export default Copyright;
