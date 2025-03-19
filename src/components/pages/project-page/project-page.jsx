import React from "react";
import About from "/src/components/blocks/about/about";
import ProjectList from "/src/components/blocks/project-list/project-list";

function ProjectPage({ projects }) {
  return (
    <>
      <About />
      <ProjectList projects={projects} />
    </>
  );
}

export default ProjectPage;
