import styled from "styled-components";
import { Ul, Li, Paragraph, Span } from "/src/components/styled";

export const ExperienceList = styled(Ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 450px;
    padding: 10px;
  }

  @media (min-width: 1440px) {
    width: 800px;
    padding: 15px;
  }
`;

export const ExperienceItem = styled(Li)`
  width: auto;
  border-bottom: 2px solid #000000;

  &:first-child {
    padding-bottom: 10px;
  }

  &:not(:first-child) {
    padding-top: 10px;
  }

  &:last-child {
    border: none;
  }
`;

export const InfoList = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

export const InfoItem = styled(Li)`
  width: auto;
  border-bottom: 1px solid #3f5c42;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoDate = styled(Span)``;

export const InfoValue = styled(Paragraph)``;

export const InfoClass = styled.b`
  color: #ca4949;
`;
