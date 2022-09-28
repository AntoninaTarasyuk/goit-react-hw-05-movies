import styled from "@emotion/styled";

export const SearchForm = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;
export const SearchInput = styled.input`
  padding: 8px 32px 8px 8px;
  ackground-color: transparent;
  border-radius: 4px;
  border: 1px solid #000000;
  font: inherit;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 6px;
  padding: 0;
  border: none;
  color: #000000;
  background-color: transparent;
  cursor: pointer;
`;