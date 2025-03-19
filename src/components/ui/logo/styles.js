import styled from "styled-components";
import { Image } from "/src/components/styled";

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    opacity: 0.5;
  }
`;

export const ImageLogo = styled(Image)`
  width: 48px;
  height: 44px;

  @media (min-width: 1440px) {
    width: 65px;
    height: 60px;
  }
`;

export const Text = styled.span`
  display: flex;
  font-family: "Parisienne", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  color: #000000;

  @media (min-width: 1440px) {
    font-size: 45px;
  }
`;
