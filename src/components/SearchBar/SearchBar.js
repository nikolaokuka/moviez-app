import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {getMovies} from '../../store/features/movies/moviesSlice';

import {SearchForm, Input, ButtonSearch} from './SearchBar.styles';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      path: '/search/movie',
      query: searchInput
    };

    dispatch(getMovies(options));
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
