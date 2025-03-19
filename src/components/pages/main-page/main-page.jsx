import React from "react";
import About from "/src/components/blocks/about/about";
import EducationList from "/src/components/blocks/education-list/education-list";
import Resume from "/src/components/blocks/resume/resume";

function MainPage({ works, educations }) {
  return (
    <>
      <About />
      <EducationList educations={educations} />
      <Resume works={works} />
    </>
  );
}

export default MainPage;
