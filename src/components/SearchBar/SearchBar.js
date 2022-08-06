import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

import {getMovies} from '../../store/features/movies/moviesSlice';

import {SearchContainer, Input, ButtonSearch} from './SearchBar.styles';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.themeSlice);

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
    <SearchContainer>
      <ThemeSwitch />
      <form onSubmit={handleSubmit}>
        <Input
          required
          type="search"
          placeholder="search moviez"
          value={searchInput}
          onChange={handleChange}
          theme={theme}
        />
        <ButtonSearch>Search</ButtonSearch>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
