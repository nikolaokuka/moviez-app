import {useState} from 'react';

import {SearchForm, Input, ButtonSearch} from './SearchBar.styles';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // search movies here
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="search moviez"
        value={searchInput}
        onChange={handleChange}
      />
      <ButtonSearch>Search</ButtonSearch>
    </SearchForm>
  );
};

export default SearchBar;
