import styled from "styled-components";
import {
  Span,
  Paragraph,
  Article,
  Link,
  Image,
  Wrapper,
} from "/src/components/styled";

export const StyledProjectCard = styled(Article)`
  width: 290px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 5px rgba(86, 139, 92, 0.2);

  @media (min-width: 768px) {
    width: 316px;
    padding: 15px;
  }

  @media (min-width: 1440px) {
    width: 383px;
    padding: 20px;
  }
`;

export const LinkImgStyled = styled(Link)`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0px 0px 8px 5px rgba(86, 139, 92, 0.2);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    opacity: 0.5;
  }
`;

export const ImgStyled = styled(Image)`
  display: block;
  width: 270px;
  height: 174px;

  @media (min-width: 768px) {
    width: 286px;
  }

  @media (min-width: 1440px) {
    width: 343px;
  }
`;

export const LinkWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LinkSiteStyled = styled(Link)`
  display: block;
  width: 200px;
  text-decoration: none;
  font-weight: 700;
  line-height: 30px;
  font-size: 25px;
  color: #333333;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: #265f05;
  }
`;

export const LinkTextStyled = styled(Span)`
  display: block;
  width: 200px;
  text-decoration: none;
  font-weight: 700;
  line-height: 30px;
  font-size: 25px;
  color: #333333;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: #265f05;
  }
`;

export const LinkGitHubStyled = styled(Link)`
  cursor: pointer;
  width: 60px;
  height: 60px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    opacity: 0.5;
  }
`;

export const LogoGitHubStyled = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const DesriptionStyled = styled(Paragraph)`
  display: block;
  width: 270px;
  text-align: left;
`;
