import styled from "styled-components";
import { Span, Paragraph, Article } from "/src/components/styled";

export const StyledWorkCard = styled(Article)`
  display: block;
  border-bottom: 1px solid #3f5c42;

  &:last-child {
    border-bottom: none;
  }
`;

export const JobDate = styled(Span)``;

export const JobValue = styled(Paragraph)``;

export const JobInfo = styled(Paragraph)``;
