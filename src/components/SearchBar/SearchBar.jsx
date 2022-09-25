import { Wrapper, SearchInput } from "./SearchBar.styled";
// import { FaSearch } from "react-icons/fa";
export const SearchBar = ({value, onChange}) => {
  return (
    <Wrapper>
      {/* <form> */}
        <SearchInput
          type="text"
          value={value}
          placeholder="Enter movie name"
          onChange={e => onChange(e.target.value)}
        />
        {/* <SearchBtn type="submit"><FaSearch /></SearchBtn>
      </form> */}
    </Wrapper>
  );
}
