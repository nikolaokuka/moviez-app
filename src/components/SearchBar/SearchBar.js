import {useState} from 'react';

import {SearchForm, Input, ButtonSearch} from './SearchBar.styles';

const SearchBar = ({searchMovies}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(searchInput);
    setSearchInput('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        required
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
