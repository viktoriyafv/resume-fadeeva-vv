import React from "react";
import PersonalInfo from "/src/components/layout/personal-info/personal-info";
import PersonState from "/src/components/layout/personal-info/person-state";
import Experience from "/src/components/layout/experience/experience";
import { StyledSection } from "./styles";

function Resume({ works }) {
  return (
    <StyledSection>
      <PersonState>
        <PersonalInfo />
      </PersonState>
      <Experience works={works} />
    </StyledSection>
  );
}

export default Resume;
