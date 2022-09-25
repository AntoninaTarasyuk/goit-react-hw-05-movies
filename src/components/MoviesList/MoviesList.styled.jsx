import styled from "@emotion/styled";

export const Container = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
