import styled from "styled-components";
import { Section, Wrapper, Paragraph, Image } from "/src/components/styled";
import Button from "/src/components/ui/button/button";

export const StyledSection = styled(Section)`
  position: relative;

  @media (min-width: 768px) {
    padding: 30px 100px 30px 45px;
  }

  @media (min-width: 1440px) {
    padding: 40px 500px 40px 100px;
  }
`;

export const TitleWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 100px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    padding-right: 0;
  }

  @media (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const ImageWrapper = styled(Wrapper)`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    top: 30px;
    right: 45px;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1440px) {
    top: 40px;
    right: 100px;
    width: 300px;
    height: 300px;
  }
`;

export const ImageAbout = styled(Image)`
  width: 100px;
  height: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 150px;
  }

  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const CityAbout = styled(Paragraph)`
  display: block;
  margin: 0;
  margin-bottom: 15px;

  @media (min-width: 1440px) {
    margin-top: 5px;
  }
`;

export const DescriptionAbout = styled(Paragraph)`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Citation = styled.q`
  display: block;
`;

export const CitationAbout = styled(Citation)`
  display: block;
  font-style: italic;
  margin-top: 10px;
`;

export const StyledButton = styled(Button)`
  display: block;
`;
