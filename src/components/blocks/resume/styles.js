import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
