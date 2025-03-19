import styled from "styled-components";

const Section = styled.section`
  display: block;
  width: ${(props) => props.theme.mobileWidth};
  padding: 20px 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: ${(props) => props.theme.tabletWidth};
    padding: 30px 45px;
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.theme.desktopWidth};
    padding: 30px 100px;
  }
`;

export default Section;
