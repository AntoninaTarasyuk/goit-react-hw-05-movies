import PropTypes from "prop-types";
import { Wrapper, SearchInput } from "./SearchBar.styled";

export const SearchBar = ({ value, onChange }) => {
  return (
    <Wrapper>
      <SearchInput
        type="text"
        value={value}
        placeholder="Enter movie name"
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
