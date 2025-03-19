import styled from "styled-components";
import { Section, Wrapper } from "/src/components/styled";

export const StyledSection = styled(Section)`
  background-color: #579457;
  width: auto;
  padding: 0;
  margin: 0;
`;

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  width: 320px;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 30px 45px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 30px 100px;
  }
`;
