import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledSection,
  TitleWrapper,
  ImageWrapper,
  ImageAbout,
  CityAbout,
  DescriptionAbout,
  CitationAbout,
  StyledButton,
} from "./styles";
import imaga from "/src/assets/photo-me.jpg";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";
import Button from "/src/components/ui/button/button";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Перейти в резюме
      </StyledButton>
    ),
  },
  {
    to: AppRoute.PROJECT,
    button: (
      <Button key={AppRoute.PROJECT} link={AppRoute.PROJECT}>
        Показать проекты
      </Button>
    ),
  },
];

function About() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledSection>
      <TitleWrapper>
        <Title size={TitleSize.ABOUT} title={TitleLevel.H1}>
          Виктория Фадеева
        </Title>
        <ImageWrapper>
          <ImageAbout src={imaga} alt="Виктория Фадеева" />
        </ImageWrapper>
      </TitleWrapper>
      <CityAbout>Возраст: 36 лет</CityAbout>
      <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
        Резюме на позицию Junior Frontend developer
      </Title>
      <CityAbout>г. Петрозаводск</CityAbout>
      <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
        Информация о себе:
      </Title>
      <DescriptionAbout>
        17 лет отдала бухгалтерии, попробовав себя во всех возможных ее сферах и
        почувствовала выгорание. <br /> Летом 2023 года открыла для
        веб-разработку и приступила к самостоятельному изучению. Но уже к
        сентябрю поняла, что необходим коплексный подход. Изучив предложения,
        выбрала для себя профессию "Фронтенд-разработчик" в HTML Academy. За
        время обучения с нуля сверcтала 7 учебных проектов, используя такие
        технологии, как BEM, Sass, Less, Flex, Grid, JavaScript, Pixel Perfect, 
        React. Научилась работать в графическом редакторе Figma. Освоила
        систему контроля версий Git, облачные сервисы Netlify и Vercel. Я
        нахожусь в самом начале пути, но страсть к обучению и заинтересованность
        в получении знаний делает свое дело.
        <CitationAbout>
          Найдите работу, в которую влюбитесь, и вам больше не придётся
          трудиться ни одного дня в жизни.
        </CitationAbout>
        {" - Конфуций"}
      </DescriptionAbout>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </StyledSection>
  );
}

export default About;
