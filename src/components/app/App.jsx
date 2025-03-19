import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import ProjectPage from "/src/components/pages/project-page/project-page";
import { GlobalStyle } from "./styles";
import projectList from "/src/mocks/projectList";
import workList from "/src/mocks/workList";
import educationList from "/src/mocks/educationList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage works={workList} educations={educationList} />}
            />
            <Route
              exact
              path={AppRoute.PROJECT.replace(AppRoute.MAIN, "")}
              element={<ProjectPage projects={projectList} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
