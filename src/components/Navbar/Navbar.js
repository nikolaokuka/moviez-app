import {useSelector} from 'react-redux';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import {NavbarContainer} from './Navbar.styles';

const Navbar = () => {
  const {theme} = useSelector((state) => state.themeSlice);

  return (
    <NavbarContainer theme={theme}>
      <Logo />
      <SearchBar />
    </NavbarContainer>
  );
};

export default Navbar;
