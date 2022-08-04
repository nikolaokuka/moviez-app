import {NavbarContainer} from './Navbar.styles';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBar />
    </NavbarContainer>
  );
};

export default Navbar;
