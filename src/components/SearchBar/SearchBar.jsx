import PropTypes from "prop-types";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { SearchForm, SearchInput, SearchBtn } from "./SearchBar.styled";

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const hendleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    if (searchQuery.trim() === "") {
      setSearchQuery("");
      return toast.info("Please enter a search query");
    };
    setSearchQuery("");
  }
  return (
    <SearchForm onSubmit={hendleSubmit}>
      <SearchInput
        type="text"
        name="searchQuery"
        placeholder="Enter movie name"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <SearchBtn type="submit"><FaSearch /></SearchBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
