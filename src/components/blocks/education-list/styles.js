import styled from "styled-components";
import { Section, Wrapper, Image } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: block;
`;

export const TitleWrapper = styled(Wrapper)`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const ButtonWrapper = styled(Wrapper)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

const ButtonSwiper = styled.button`
  display: block;
`;

export const StyledButtonSwiper = styled(ButtonSwiper)`
  display: block;
  border: none;
  border-radius: 8px;
  background-color: #478857;
  width: 22px;
  height: 22px;

  &:hover {
    &::after {
      opacity: 0.7;
    }
  }

  &:focus {
    outline: none;
    border-radius: 30px;
    background-color: $white-color;
  }

  &:active {
    border-radius: 30px;
    background-color: $white-color;

    &::after {
      opacity: 0.7;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(255, 255, 255, 0.2);

    &:hover,
    &:focus,
    &:active {
      background-color: inherit;

      &::after {
        background-color: $disabled-button;
        opacity: 1;
      }
    }
  }
`;

export const ArrowImage = styled(Image)`
  width: 10px;
  height: 10px;
`;
