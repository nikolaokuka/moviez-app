import {LogoContainer, Text} from './Logo.styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Logo = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <LogoContainer>
      <Text onClick={reloadPage}>Moviez</Text>
      <ThemeSwitch />
    </LogoContainer>
  );
};

export default Logo;
