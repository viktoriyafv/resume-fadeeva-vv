import React, { useRef, useContext } from "react";
import PersonalTitle from "./personal-title";
import { SideMenu } from "./personal-list";
import { PersonalInfoWrapper } from "./styles";

function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <PersonalTitle />
      <SideMenu />
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
