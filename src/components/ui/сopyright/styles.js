import styled from "styled-components";
import { Span, Wrapper } from "/src/components/styled";

export const CopirightWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CopyrightStyle = styled(Span)`
  display: block;
  width: auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 14px;
  }
`;

export const ReactStyle = styled(Span)`
  display: block;
  width: auto;
  font-size: 15px;
  font-weight: 600;
  line-height: 14px;
  text-align: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 16px;
  }
`;
