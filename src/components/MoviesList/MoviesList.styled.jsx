import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-content: center;
  margin: 20px auto;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;