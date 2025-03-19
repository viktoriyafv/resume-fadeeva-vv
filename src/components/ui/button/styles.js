import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 30px;
  width: 270px;
  color: ${(props) => props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorForDarkBackground};
  font-size: 25px;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
  font-style: italic;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  box-shadow: none;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    opacity: 0.5;
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }
`;
