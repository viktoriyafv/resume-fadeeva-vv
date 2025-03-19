import styled from "styled-components";
import { Ul, Li } from "/src/components/styled";

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
