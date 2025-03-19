import React from "react";
import githubIcons from "/src/assets/githubIcons.svg";
import {
  StyledProjectCard,
  LinkImgStyled,
  ImgStyled,
  LinkWrapper,
  LinkSiteStyled,
  LinkTextStyled,
  LinkGitHubStyled,
  LogoGitHubStyled,
  DesriptionStyled,
} from "./styles";

function ProjectCard({ name, about, image, site, github }) {
  return (
    <StyledProjectCard>
      <LinkImgStyled href={site} rel="noreferrer noopener" target="_blank">
        <ImgStyled
          src={image}
          className="project-card__image"
          width={290}
          height={174}
          alt="Проект Intership"
        />
      </LinkImgStyled>
      <LinkWrapper>
        <LinkSiteStyled href={site} rel="noreferrer noopener" target="_blank">
          <LinkTextStyled>{name}</LinkTextStyled>
        </LinkSiteStyled>
        <LinkGitHubStyled
          href={github}
          rel="noreferrer noopener"
          target="_blank"
        >
          <LogoGitHubStyled
            width="60"
            height="60"
            src={githubIcons}
            alt="логотип"
          />
        </LinkGitHubStyled>
      </LinkWrapper>
      <DesriptionStyled> {about}</DesriptionStyled>
    </StyledProjectCard>
  );
}

export default ProjectCard;
