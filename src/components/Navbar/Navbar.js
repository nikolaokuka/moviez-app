import {NavbarContainer} from './Navbar.styles';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({searchMovies}) => {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBar searchMovies={searchMovies} />
    </NavbarContainer>
  );
};

export default Navbar;
