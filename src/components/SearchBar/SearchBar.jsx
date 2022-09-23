// import { useState, useEffect } from "react";
// import { useSearchParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import { Wrapper, SearchInput, SearchBtn } from "./SearchBar.styled";

export const SearchBar = () => {

  return (
    <Wrapper>
      <form onSubmit={e => {
        e.preventDefault();
        // onSubmit(searchQuery);
        // searchQuery("");
        }}>
        <SearchInput
          type="text"
          autoComplete="off"
          name="searchQuery"
          // value={searchQuery}
          placeholder="Enter movie name"
          // onChange={e => setSearchQuery(e.target.value)}
        />
        <SearchBtn type="submit"><FaSearch /></SearchBtn>
      </form>
    </Wrapper>
  );
};