import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  PersonalInfoItem,
  PersonalInfoValue,
  PersonalInfoKeyLink,
  PersonalInfoKey,
} from "./styles";
import { Ul } from "/src/components/styled";
import { MenuContext } from "./person-state";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";

export const PersonalInfoList = styled(Ul)`
  height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s;

  ${(props) =>
    props.open &&
    css`
      height: auto;
    `}

  @media (min-width: 768px) {
    height: auto;
  }
`;

function PersonList() {
  return (
    <>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Контакты:
        </Title>
        <PersonalInfoValue>Email:</PersonalInfoValue>
        <PersonalInfoKeyLink href="mailto:viktoriya_atm@mail.ru">
          viktoriya_atm@mail.ru
        </PersonalInfoKeyLink>
        <PersonalInfoValue>Telegram:</PersonalInfoValue>
        <PersonalInfoKeyLink href="tg://resolve?domain=vvviktoriya_fad">
          @vvviktoriya_fad
        </PersonalInfoKeyLink>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Гражданство:
        </Title>
        <PersonalInfoKey>Россия</PersonalInfoKey>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Образование:
        </Title>
        <PersonalInfoKey>Высшее</PersonalInfoKey>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Дата рождения:
        </Title>
        <PersonalInfoKey>9 октября 1988 г</PersonalInfoKey>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Семейное положение:
        </Title>
        <PersonalInfoKey>Замужем (есть дети)</PersonalInfoKey>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Знание языков:
        </Title>
        <PersonalInfoKey>Английский (средний)</PersonalInfoKey>
      </PersonalInfoItem>
      <PersonalInfoItem>
        <Title size={TitleSize.RESUME} title={TitleLevel.h3}>
          Навыки:
        </Title>
        <PersonalInfoKey>HTML / CSS</PersonalInfoKey>
        <PersonalInfoKey>JavaScript / React</PersonalInfoKey>
        <PersonalInfoKey>Контроль версий/Git</PersonalInfoKey>
        <PersonalInfoKey>Адаптивный дизайн</PersonalInfoKey>
        <PersonalInfoKey>Pixel Perfet</PersonalInfoKey>
        <PersonalInfoKey>
          Инструменты для разработчика в браузере
        </PersonalInfoKey>
      </PersonalInfoItem>
    </>
  );
}

export default PersonList;

export const SideMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <PersonalInfoList open={isMenuOpen}>
      <PersonList />
    </PersonalInfoList>
  );
};
