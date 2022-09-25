import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background-color: #019b74;
  color: white;
  
  cursor: pointer;
  transition: background-color 300ms linear;
  :hover,
  :focus {
    outline: none;
    background-color: #01795b;
}
`;