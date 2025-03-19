import styled from "styled-components";
import { Ul, Li, Wrapper, Span } from "/src/components/styled";

export const PersonalInfoWrapper = styled(Wrapper)`
  @media (min-width: 768px) {
    width: 250px;
    padding: 10px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    padding: 15px;
  }
`;

export const PersonalInfoItem = styled(Li)`
  width: auto;
  border-bottom: 2px solid #000000;
  padding: 15px 0;

  &:last-child {
    border: none;
  }
`;

export const PersonalInfoValue = styled(Span)`
  display: block;
  color: #000000;
  font-weight: 500;
  margin: 0;
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const PersonalInfoKey = styled(Span)`
  display: block;
  color: #000000;
  margin: 0;
  margin-top: 10px;
`;

export const PersonalInfoKeyLink = styled.a`
  display: block;
  text-decoration: none;
  color: #000000;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #265f05;
  }
`;
