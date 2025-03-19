import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  ExperienceList,
  ExperienceItem,
  InfoList,
  InfoItem,
  InfoDate,
  InfoValue,
  InfoClass,
} from "./styles";
import JobList from "/src/components/layout/job-list/job-list";

function Experience({ works }) {
  return (
    <ExperienceList>
      <ExperienceItem>
        <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
          Курсы и треннинги:
        </Title>
        <InfoList>
          <InfoItem>
            <InfoValue>Профессия "Фронтенд-разработчик"</InfoValue>
            <Title size={TitleSize.VALUE} title={TitleLevel.h3}>
              HTML Academy. Интерактивные онлайн курсы
            </Title>
            <InfoValue>Специальность: Фронтенд-разработчик</InfoValue>
            <InfoDate>с 12.12.2023 г по 10.03.2025 г</InfoDate>
          </InfoItem>
        </InfoList>
      </ExperienceItem>
      <ExperienceItem>
        <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
          Образование:
        </Title>
        <InfoList>
          <InfoItem>
            <InfoDate>2010 г</InfoDate>
            <Title size={TitleSize.VALUE} title={TitleLevel.h3}>
              НОУ Петрозаводский кооперативный техникум Карелреспотребсоюза
            </Title>
            <InfoValue>Специальность: Бухгалтерский учет</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoDate>2013 г</InfoDate>
            <Title size={TitleSize.VALUE} title={TitleLevel.h3}>
              НОУ ВПО «Институт международного права и экономики имени А.С.
              Грибоедова»
              <br /> <InfoClass>диплом с отличием</InfoClass>
            </Title>
            <InfoValue>Специальность: Финансы и кредит</InfoValue>
          </InfoItem>
        </InfoList>
      </ExperienceItem>
      <ExperienceItem>
        <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
          Опыт работы:
        </Title>
        <JobList works={works} />
      </ExperienceItem>
    </ExperienceList>
  );
}

export default Experience;
