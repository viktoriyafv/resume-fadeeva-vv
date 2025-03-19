import styled from "styled-components";
import { Article, Image } from "/src/components/styled";

export const StyledEducationCard = styled(Article)`
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

export const ImgStyled = styled(Image)`
  display: block;
  width: 290px;
  height: auto;

  @media (min-width: 768px) {
    width: 286px;
  }

  @media (min-width: 1440px) {
    width: 343px;
  }
`;
